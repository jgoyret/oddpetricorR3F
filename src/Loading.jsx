import React from 'react'
import {Spinner} from "@nextui-org/react";

export default function Loading() {

  console.log("Spinner", Spinner)
  
  return (
    <div className="container justify-center flex content-center min-h-full">
      <Spinner />
    </div>
  )
}
