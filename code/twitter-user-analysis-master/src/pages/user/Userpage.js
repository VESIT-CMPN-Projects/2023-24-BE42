import React, { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { useDynamicTitle } from '../../hooks/useDynamicTitle';
import { UserImage } from './components/UserImage';
import { UserInfoTable } from './components/UserInfoTable';
import { SectionTitle } from '../../components/SectionTitle';
import { Section } from '../../components/Section';
import { SectionDescription } from '../../components/SectionDescription';
import { Loader } from '../../components/Loader';

export const Userpage = ({pageTitle,loading}) => {
  const [params] = useSearchParams();
  const queryString = params.get('q');
  const BASE_URL = process.env.REACT_APP_API_URL;
  const { data, isLoading, setUrl } = useFetch();

  useDynamicTitle(pageTitle,'Profilysis');

  useEffect(() => {
    const URL =  `${BASE_URL}users?username=@${queryString}`;
    // http://localhost:8000/users?username=@narendramodi
    setUrl(URL);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  
  return (
    <main>
      { (isLoading) && <Loader text="Fetching User Profile"/> }
      { !(isLoading) && data &&  <>
        <Section >
          <SectionTitle title="Profile Information" />
          <div className="flex flex-row justify-center px-32">
            <div className="basis-1/6">
              <UserImage imagePath={data[0].image}/>
            </div>
            <div className="basis-5/6 self-center">
              <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">{ data[0].username}</p>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data[0].name}</h5>
              <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">{ data[0].updated_date}</p>
            </div>

            </div>
            <div className="flex flex-row  px-32">
            <p className="mt-2 font-normal text-gray-700 dark:text-gray-400">{ data[0].bio}</p>
            </div>

            <div className="flex flex-row px-32">
            <UserInfoTable data={data[0]}/>
          </div>
        </Section>

        <Section classes= 'bg-slate-50 dark:bg-slate-950 pb-32'>
          <SectionTitle title="Get Started With Analysis"/>
          <SectionDescription description={"Know more about this profile, get powerful insights and trends"}/>
          <div className="text-center">
          <Link to={`/users/analyse?q=${queryString}`} type="button" className="text-white bg-primary-800 hover:bg-primary-900 focus:outline-none font-medium rounded-md text-md px-10 py-3 text-center me-2 mb-2"> Start Analysis</Link>
          </div>
        </Section>      
      </>
      }

      
    
    </main>
  )
}
