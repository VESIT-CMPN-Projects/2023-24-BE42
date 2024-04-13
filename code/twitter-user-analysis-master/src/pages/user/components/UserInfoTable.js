import React from 'react'

export const UserInfoTable = ({data}) => {
  return (
    <>
      <div className="basis-1/2 self-center">
        <div className="relative overflow-x-auto mt-3">
            <table className="w-full text-base text-left rtl:text-right text-gray-500 dark:text-gray-400">
                
                <tbody>
                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Location 
                        </th>
                        <td className="py-2">
                            {data.location}
                        </td>
                        
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Language Preference
                        </th>
                        <td className="py-2">
                            { data.language_preference}
                        </td>
                        
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Joined
                        </th>
                        <td className="py-2">
                          { data.joined}
                        </td>
                        
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          URL
                        </th>
                        <td className="py-2">
                        <a href={data.url} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{data.url}</a>
                        </td>
                        
                    </tr>
                </tbody>
                
            </table>
        </div>
      </div>

      <div className="basis-1/2 self-end">
        <div className="relative overflow-x-auto mt-3">
            <table className="w-full text-base text-left rtl:text-right text-gray-500 dark:text-gray-400">
                
                <tbody>
                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Followers 
                        </th>
                        <td className="py-2">
                            {data.followers}
                        </td>
                        
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Following
                        </th>
                        <td className="py-2">
                            { data.following}
                        </td>
                        
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Ratio
                        </th>
                        <td className="py-2">
                          { data.ratio}
                        </td>
                        
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Tweets
                        </th>
                        <td className="py-2">
                          { data.tweets}
                        </td>
                    </tr>

                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Listed
                        </th>
                        <td className="py-2">
                          { data.listed}
                        </td>
                    </tr>
                </tbody>
                
            </table>
        </div>
      </div>
    </>
  )
}
