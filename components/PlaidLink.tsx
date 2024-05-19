'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { Button } from './ui/button'
import {
  PlaidLinkOnSuccess,
  PlaidLinkOptions,
  usePlaidLink,
} from "react-plaid-link";
import { useRouter } from 'next/navigation';

const PlaidLink = ({user, variant}:PlaidLinkProps) => {
  const [token, setToken] = useState("");
    const router = useRouter();  
    

    useEffect(() => {
        const getLinkToken = async () => {
            // const data = await createLinkToken(user);
       
        }
    },[])
    
     const onSuccess = useCallback<PlaidLinkOnSuccess>(
       async (public_token: string) => {
      router.push('/')
       },
       [user]
     );
    
    const config: PlaidLinkOptions = {
       token,
       onSuccess,
    };
    
    const { open, ready } = usePlaidLink(config);
  
    return (
    <>
      {variant === "primary" ? (
        <Button onClick={()=>open()} disabled={!ready} className="plaidlink-primary">Connect Bank</Button>
      ) : variant === "ghost" ? (
        <Button className="plaidlink-ghost">Connect Bank</Button>
      ) : (
        <Button className="plaidlink-default">Connect Bank</Button>
      )}
    </>
  );
}

export default PlaidLink