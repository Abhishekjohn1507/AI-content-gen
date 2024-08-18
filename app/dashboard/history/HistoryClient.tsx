"use client"

import { Button } from "@/components/ui/button";
import {  CopyIcon } from "lucide-react";
import React from "react";
function truncateText(text: string, wordLimit: number): string {
  const words = text.split(' ');
  if (words.length <= wordLimit) {
    return text;
  }
  return words.slice(0, wordLimit).join(' ') + '...';
}

function HistoryClient({ historyList }) {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch(err => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div>
      <div className="flex flex-col text-center w-full mb-10 mt-10">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Your History</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Get Your All History Here</h1>
      </div>
      <div className="grid grid-cols-5 md:grid-cols-5 gap-5 p-1 bg-slate-200">
        <h1 className='col-span-1 text-center text-2xl font-medium'>Template</h1>
        <h1 className='col-span-1 text-center text-2xl font-medium'>AI Response</h1>
        <h1 className='col-span-1 text-center text-2xl font-medium'>Date</h1>
        <h1 className='col-span-1 text-center text-2xl font-medium'>Words</h1>
        <h1 className='col-span-1 text-center text-2xl font-medium'>Copy</h1>
      </div>
      {historyList.length > 0 ? (
        <div>
          {historyList.map((item: { templateSlug: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; aiResponse: string; createdAt: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }, index: React.Key | null | undefined) => (
            <div key={index} className="grid grid-cols-5 space-x-2 space-y-10 rounded-lg items-center justify-center m-2 border shadow-lg p-2">
              <p className='col-span-1 text-center font-medium text-xl'>
                {item.templateSlug}
              </p>
              <div className="col-span-1 flex items-center">
                <p>{item.aiResponse ? truncateText(item.aiResponse, 50) : 'No response available'}</p>

              </div>
              <p className="col-span-1 text-center">
                {item.createdAt}
              </p>
              <h2 className='col-span-1 text-center'>{item.aiResponse?.split(" ").length || 0}</h2>

              <Button variant="outline"
                className="ml-1 flex items-center gap-1 px-1 py-0.5 text-xs border-transparent bg-transparent shadow-transparent" onClick={() => handleCopy(item.aiResponse)}> <CopyIcon /> Copy
              </Button>

            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No history available</p>
      )}
    </div>
  );
}

export default HistoryClient;
