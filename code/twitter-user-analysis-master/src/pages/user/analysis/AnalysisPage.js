import React, { useEffect } from 'react'
import { useDynamicTitle } from '../../../hooks/useDynamicTitle';
import { SectionTitle } from '../../../components/SectionTitle';
import { useSearchParams } from 'react-router-dom';
import { useFetch } from '../../../hooks/useFetch';
import { ProgressBar } from '../../../charts/ProgressBar';
import LineChart from '../../../charts/BarGraph';
import { Section } from '../../../components/Section';
import { SectionDescription } from '../../../components/SectionDescription';
import PieChart from '../../../charts/PieChart';
import { Loader } from '../../../components/Loader';

export const AnalysisPage = ({pageTitle,loading}) => {
  const [params] = useSearchParams();
  const queryString = params.get('q');
  const BASE_URL = process.env.REACT_APP_API_URL;
  const { data, isLoading,  setUrl } = useFetch();

  useDynamicTitle(pageTitle,'Profilysis');

  useEffect(() => {
    const URL =  `${BASE_URL}users?username=@${queryString}`;
    // http://localhost:8000/users?username=@narendramodi
    setUrl(URL);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  const getUTCTime = () => {
    const date = new Date();
    const hours = date.getUTCHours().toString().padStart(2,'0');
    const minutes = date.getUTCMinutes().toString().padStart(2,'0');
    const seconds = date.getUTCSeconds().toString().padStart(2,'0');
    return `${hours}:${minutes}:${seconds}`;
  }
  
  const getHoursOfDayArray = () => {
    const arr = [];
    for(let i=0; i<24; i++) {
      arr.push(i.toString().padStart(2,"0"));
    }
    return arr;
  }

  return (
    
    <main >
      { isLoading && <Loader text="Analysing"/>}
      {
        !isLoading && data && <div>
        <Section>
          <SectionTitle title="Tweets Analysis"/>
          <SectionDescription description={`We analyzed 99 of the tweets by ${data[0].username} and here's what we found`}/>
        
          <ProgressBar progress={data[0].tweet_analysis.mentions} description="Tweets with @mentions"/>
          <ProgressBar progress={data[0].tweet_analysis.hashtags} description="Tweets with #hashtags"/>
          <ProgressBar progress={data[0].tweet_analysis.links} description="Tweets with links"/>
          <ProgressBar progress={data[0].tweet_analysis.media} description="Tweets with media"/>
          <ProgressBar progress={data[0].tweet_analysis.retweets} description="Retweets"/>
          <ProgressBar progress={data[0].tweet_analysis.replies} description="Replies"/>
        </Section>

        <Section classes="bg-slate-200 dark:bg-slate-950">
          <SectionTitle title="Activity Time"/>
          <div className='mx-56 bg-white'>
            <LineChart categories={getHoursOfDayArray()} data={data[0].tweet_analysis.activity_time.tweets_per_hour}/>
          </div>
          <div className='dark:text-slate-300 mx-56 mt-4'>
              <span className="bg-blue-100 text-blue-800 font-medium me-1 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Note</span>Timezone shown is UTC+0. Current UTC time is <strong>{getUTCTime()}</strong>. The <a href="http://www.timeanddate.com/worldclock/" >world clock</a> can help you compare different timezones. If the tweets are spread evenly across the full 24 hour span, chances are that it's been set up to tweet automatically.
          </div>
        </Section>

        <Section>
          <SectionTitle title="Topics"/>
          <SectionDescription description="We analyze the tweet's contents and tell you about topics usage in form of 'tag clouds' so that you can easily understand which words were the most popular." classes="mx-56"/>
          <p className=' text-blue-800 dark:text-blue-500 mx-56 flex flex-wrap mt-8 bg-slate-100 p-4 rounded-md dark:bg-slate-600'>
              { data[0].topics.map((topic,index) => 
                  <a key={index} href="https://twitter.com/#!/search/oath" className=' hover:underline block self-end me-2 ' style={{fontSize: topic.size, paddingRight: "5px"}} >{ topic.name }</a>
              )}
          </p>
        </Section>

        <Section classes="bg-slate-200 dark:bg-slate-950 pb-32" >
          <SectionTitle title="Hashtags"/>
          <SectionDescription description="We analyze the hashtags based on the latest tweets" classes="mx-56"/>
          <p className=' text-blue-800 dark:text-blue-500 mx-56 flex flex-wrap mt-8  bg-slate-100 p-4 rounded-md dark:bg-slate-600'>
              { data[0].hashtags_used.map((hashtag,index) => 
                  <a key={index} href="https://twitter.com/#!/search/oath" className=' hover:underline block self-end me-2 text-lgs' style={{paddingRight: "5px"}} >{ hashtag }</a>
              )}
          </p>
        </Section>
        <Section classes="bg-white dark:bg-slate-900">
          <SectionTitle title="Mentions"/>
          <SectionDescription classes="mx-56" description={`Let us dive deeper into ${data[0].username}'s Community. Each Section of the pie chart denotes the username and their interaction percentage with ${data[0].username}`} />
            <div className='p-4 rounded-md flex justify-center bg-white mx-56'>
              <PieChart data={data[0].mentioned_accounts}></PieChart>
            </div>
        </Section>
      </div>
      }
    </main>   
  )
}
