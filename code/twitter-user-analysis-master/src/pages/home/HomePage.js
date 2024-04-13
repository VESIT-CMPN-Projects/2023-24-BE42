import React from "react";
import { UsernameForm } from "./components/UsernameForm";
import { HeroSection } from "./components/HeroSection";
import { SectionTitle } from "../../components/SectionTitle";
import { Section } from "../../components/Section";
import { SectionDescription } from "../../components/SectionDescription";
export const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <Section classes="bg-slate-200 dark:bg-slate-950">
        <SectionTitle title="Get Started With Profilysis" />
        <SectionDescription
          description={
            "Looking for someone? Our free people search engine finds social media profiles, public records, and more!"
          }
        />
        <UsernameForm />
      </Section>
      <Section>
        <SectionTitle title="How Twitter Analysis Works?" />
        <SectionDescription
          classes={"mx-32"}
          description={
            "We gather the requested user's profile and latest tweets. We analyze the tweet's contents and tell you about topics usage in form of \"tag clouds\" so that you can easily understand which words were the most popular."
          }
        />
        <div className="flex flex-row gap-8 mx-32 dark:text-gray-300">
          <div className="basis-1/2">
            <div>
              <span className="bg-gray-100 text-gray-800 font-bold text-lg me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                Information
              </span>
              <p className="mt-2 mb-8">
                The info section shows the publicly available information about
                a requested Twitter profile. We'll also show you the user's join
                date and timezone among other things.
              </p>
            </div>

            <div>
              <span className="bg-gray-100 text-gray-800 font-bold text-lg me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                Topics
              </span>
              <p className="mt-2 mb-8">
                This section is divided into three sub-sections - topics,
                hashtags and mentions. Each one is based on the user's latest
                tweets. Hover your mouse over the items to see their usage.
              </p>
            </div>

            <div>
              <span className="bg-gray-100 text-gray-800 font-bold text-lg me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                Statistics
              </span>
              <p className="mt-2 mb-8">
                These are the numbers. Followers, friends, lists and most
                importantly the followers to following ratio - something you
                should definitely watch out for before following anybody.
              </p>
            </div>
          </div>
          
          <div className="basis-1/2">
            <div>
              <span className="bg-gray-100 text-gray-800 font-bold text-lg me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                Inside Tweets
              </span>
              <p className="mt-2 mb-8">
                We take you through the user's latest tweets and their contents
                in an easy to understand and short table. Tweets, retweets,
                tags, replies, mentions, links, media and more. A great way to
                spot spammers and automated accounts.
              </p>
            </div>

            <div>
              <span className="bg-gray-100 text-gray-800 font-bold text-lg me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                Time
              </span>
              <p className="mt-2 mb-8">
                New! This section will show you what time the user's most active
                at. Not only valuable info about the best time to reach the user
                but can also spot spammers and automated accounts.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
};
