"use client";

import React, { useCallback } from 'react'
import { useState, useEffect } from 'react'
import { Message } from '@/model/User';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { isAcceptingMessageSchema } from '@/schemas/acceptMessageSchema';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosError } from 'axios';
import { ApiResponse } from '@/types/ApiResponse';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { User } from 'next-auth';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Key, Loader2, RefreshCcw } from 'lucide-react';
import { MessageCard } from '@/components/MessageCard';



function Dashboard() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const [isSwitchloading, setIsSwitchLoading] = useState(false)
  const router = useRouter()
  
  const { data: session } = useSession()

  const form = useForm<z.infer<typeof isAcceptingMessageSchema>>({
    resolver: zodResolver(isAcceptingMessageSchema),
    defaultValues: {
     isAcceptingMessages: false,
    },
  })

  console.log("session ", session)
  console.log("form ", form)

  const { register, watch, setValue} = form;

  const acceptMessages = watch('isAcceptingMessages')

  const fetchAcceptMessage = useCallback(async () => {
    setLoading(true)
    try {
      const response = await axios.get<ApiResponse>('/api/accept-messages')
      if (response.data.isAcceptingMessage !== undefined) {
        setValue('isAcceptingMessages', response.data.isAcceptingMessage)
      }

    } catch (error) {
      console.log("error: ", error)
      const axiosError = error as AxiosError<ApiResponse>

      toast({
        title: "Error",
        description: axiosError.response?.data.message || "An error occurred",
        variant: "destructive"
      })
    }
    finally {
      setLoading(false)
    }
  }, [setValue])

  const fetchMessages = useCallback(async (refresh: boolean = false) => {
    setLoading(true)
    setIsSwitchLoading(true)
    try {
      
      const response = await axios.get<ApiResponse>('/api/get-messages')

      setMessages(response.data.messages || [])

      if(refresh){
        toast({
          title: "Messages refreshed",
          description: "Showing latest messages",
          variant: "default"
        })
      }
    } catch (error) {
      
      console.log("error: ", error)
      const axiosError = error as AxiosError<ApiResponse>

      toast({
        title: "Error",
        description: axiosError.response?.data.message || "An error occurred",
        variant: "destructive"
      })

    }
    finally {
      setLoading(false)
      setIsSwitchLoading(false)
    }
  }, [setLoading, setIsSwitchLoading, setMessages])

  const handleDeleteMessage = (messageId: string) => {
    setMessages(messages.filter((message) => message._id !== messageId));
  };

  useEffect(() => {
    if(!session || !session.user) return

    fetchAcceptMessage()
    fetchMessages()
  
  }, [fetchAcceptMessage, fetchMessages, session, setValue])

  // handle switch change
  const handleSwitchChange = async() => {
    try {
      const response = await axios.post<ApiResponse>('/api/accept-messages', {
        isAcceptingMessage: acceptMessages
      })

      setValue('isAcceptingMessages', !acceptMessages)

      toast({
        title: response.data.message,
        variant: "default"
      })

    } catch (error) {
      
      console.log("error: ", error)
      const axiosError = error as AxiosError<ApiResponse>

      toast({
        title: "Error",
        description: axiosError.response?.data.message || "An error occurred",
        variant: "destructive"
      })

    }
  }

  session?.user && console.log("session user ", session.user)

  const {username } = session?.user as User || {}
  // TODO: do more research on this
  const baseUrl = `${window.location.protocol}//${window.location.host}`
  const profileUrl = `${baseUrl}/u/${username}`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(profileUrl)
    toast({
      title: "Profile URL copied",
      description: "You can now share your profile URL ✅",
      variant: "default"
    })
  }

  // conditional check for session
  if(!session || !session.user){

   // router.push('/sign-in')
    
    toast({
      title: "User Not Signed In",
      description: "Redirecting to sign in page",
      variant: "destructive"
    })

    return (
      <div>
        <h1 className="text-4xl font-bold mb-4">User Dashboard</h1>
        <div className='bg-red-100 rounded-xl p-5 text-red-600'>
          <h1>Unauthorixed Acceess: User Not Signed in</h1>
          <p>Please Sign in to Continue</p>
          <Button onClick={() => router.push('/sign-in')}>Sign In</Button>
        </div>
      </div>

    )
  }

  return (
    
    <div>

    <h1 className="text-4xl font-bold mb-4">User Dashboard</h1>
      
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Copy Your Unique Link</h2>{' '}
        <div className="flex items-center">
          <Input
            type="text"
            value={profileUrl}
            disabled
            className="input input-bordered w-full p-2 mr-2"
          />
          <Button onClick={copyToClipboard}>Copy</Button>
        </div>
      </div>

    <div className='mb-4'>
      <Switch
        {...register('isAcceptingMessages')}
        checked={acceptMessages}
        onChange={handleSwitchChange}
        disabled={isSwitchloading}
      />
      <span className="ml-2">
          Accept Messages: {acceptMessages ? 'On' : 'Off'}
      </span>
    </div>

    <Separator />

    <Button
    className="mt-4"
    variant="outline"
    onClick={(e) => {
      e.preventDefault();
      fetchMessages(true);
    }}>
      {loading ? (
        <Loader2 className='h-4 w-4 animate-spin'/>
      ) : (
        <RefreshCcw className="h-4 w-4"/>
      )}
    </Button>
        
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {messages.length > 0 ? (
          messages.map((message, index) => (
            <MessageCard
              key={message._id}
              message={message}
              onMessageDelete={handleDeleteMessage}
            />
          ))
        ) : (
          <p>No messages to display.</p>
        )}
      </div>
    </div>
  )
}

export default Dashboard