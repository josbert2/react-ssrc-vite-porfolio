'use client'
import React from 'react'
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { AppleDark } from "developer-icons";

const reviews = [
    {
      name: "Jack",
      username: "@jack",
      body: "I've never seen anything like this before. It's amazing. I love it.",
      img: "https://avatar.vercel.sh/jack",
      icon: <AppleDark />
    },
    {
      name: "Jill",
      username: "@jill",
      body: "I don't know what to say. I'm speechless. This is amazing.",
      img: "https://avatar.vercel.sh/jill",
      icon: <AppleDark />
    },
    {
      name: "John",
      username: "@john",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/john",
      icon: <AppleDark />
    },
    {
      name: "Jane",
      username: "@jane",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/jane",
      icon: <AppleDark />
    },
    {
      name: "Jenny",
      username: "@jenny",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/jenny",
      icon: <AppleDark />
    },
    {
      name: "James",
      username: "@james",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/james",
      icon: <AppleDark />
    },
  ];

  const firstRow = reviews.slice(0, reviews.length / 2);
 

  const ReviewCard = ({
    img,
    name,
    username,
    body,
    icon
  }: {
    img: string;
    name: string;
    username: string;
    body: string;
    icon?: React.ReactNode;
  }) => {
    return (
      <>
        <figure
          className={cn(
            "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
            // light styles
            "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
            // dark styles
            "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
          )}
        >
          <div className="flex flex-row items-center gap-2">
            <img className="rounded-full" width="32" height="32" alt="" src={img} />
          {icon}
            <div className="flex flex-col">
              <figcaption className="text-sm font-medium dark:text-white">
                {name}
              </figcaption>
              <p className="text-xs font-medium dark:text-white/40">{username}</p>
            </div>
          </div>
          <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
        <div className="">
          <div className="framer-1ikn79w-container">
            <div
              className="framer-3ibA4 framer-cagc2l framer-v-cagc2l"
              data-framer-name="Variant 1"
              style={{
                "--n77d3t": "0px 0px 40px 0px rgba(255, 255, 255, 0.25)",
                borderRadius: "20px",
                boxShadow: "var(--n77d3t)",
                height: "100%",
                opacity: "1",
                width: "100%",
              }}>
              <div
                className="framer-x81gtp"
                data-framer-name="App Icon"
                style={{
                  borderRadius: "20px",
                  opacity: "1",
                }}>
                <div
                  data-framer-background-image-wrapper="true"
                  style={{
                    borderRadius: "inherit",
                    inset: "0px",
                    position: "absolute",
                  }}>
                  <AppleDark />
                </div>
              </div>
              <div
                className="framer-1w7zisj"
                data-framer-name="Inner Shadow"
                style={{
                  "--7ppjz2": "inset 0px 2px 6px 1px rgba(255, 255, 255, 0.6)",
                  borderRadius: "20px",
                  boxShadow: "var(--7ppjz2)",
                  opacity: "1",
                }}
              />
            </div>
          </div>
        </div>
      </>

    );
  };

export default function Skill() {
  return (
    <div className='relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl'>
        <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
            ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#1a1a1d] dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#1a1a1d] dark:from-background"></div>
        <ul>
            <li aria-hidden="true" style={{ willChange: "transform" }}>
            <div
                className="framer-yf0dhb"
                data-framer-name="logo09"

                style={{ flexShrink: 0 }}
            >
                <div
                data-framer-background-image-wrapper="true"
                style={{ position: "absolute", borderRadius: "inherit", inset: 0 }}
                >
                <img
                    decoding="async"
                    src="https://framerusercontent.com/images/Qs7RpNfTc6MXJVwxIY8QzQDhQ.png"
                    alt=""
                    style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    borderRadius: "inherit",
                    objectPosition: "center center",
                    objectFit: "cover"
                    }}
                />
                </div>
            </div>
            </li>
        </ul>
    </div>
  )
}
