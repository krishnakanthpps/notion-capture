import { useState } from 'react'
import Subscribe from '@/components/Subscribe'
import SEO from '@/components/SEO'

function IndexPage() {
  const [subscribed, setSubscribed] = useState(false)

  return (
    <div className="bg-gradient-to-tr from-red-500 to-purple-900 relative h-screen w-screen">


      <div className="absolute inset-0 flex flex-col justify-center items-center w-5/6 max-w-lg mx-auto text-center md:w-3/4 lg:w-2/3 xl:w-1/2">
        {subscribed ? (
          <h1 className="font-primary font-extrabold text-white text-3xl sm:text-4xl md:text-5xl md:leading-snug">
            You have subscribed!
          </h1>
        ) : (
          <div className="space-y-8">
            <h1 className="font-primary font-extrabold text-white text-3xl sm:text-4xl md:text-5xl md:leading-tight">
              <span className="text-palette-primary">
                <i>VoiceMagic</i>.
              </span>
            </h1>
			<h2 className="font-primary font-extrabold text-4xl text-red-600 sm:text-3xl md:text-4xl md:leading-tight ">
  <span className="text-palette-primary">
    Voice Assistant for all things Notion.
  </span>
</h2>

        <p className="font-secondary text-palette-light text-base md:text-lg lg:text-xl">
  Use VoiceMagic to :
  <ul>
    <li>Create notion pages </li>
    <li>Read and update notion pages</li>
  </ul>
  <i>Powered by AI to simplify your notion experience.</i>
</p>

      
      <Subscribe setSubscribed={setSubscribed} />
    </div>
  )}
</div>

	  
	    <footer className="absolute bottom-0 left-0 right-0 p-4 bg-purple-800 text-white text-center">
    <p>© {new Date().getFullYear()} VoiceMagic. All Rights Reserved.</p>
    <div>
      <a href="/privacy" className="text-white hover:text-gray-300">Privacy</a> | 
      <a href="/terms" className="text-white hover:text-gray-300 ml-2">Terms and Conditions</a> |
	  <a href="/terms" className="text-white hover:text-gray-300 ml-2">Contact Us</a>
    </div>
  </footer>
    </div>
  )
}

export default IndexPage
