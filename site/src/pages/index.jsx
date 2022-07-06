import * as React from 'react';
import Layout from '../components/layout';

function IndexPage() {
  return (
    <Layout>
      <div className="flex items-center h-64 bg-gray-500 justify-center">
        <div className="text-4xl">
          Hero block
        </div>
      </div>
      <div className="flex no-wrap h-16 bg-indigo-500 items-center">
        <div className="grow m-4 text-white justify-left">
          <div className="inline text-4xl">ZK Locale</div>
          <div className="text-xl text-gray-300 inline mx-4">
            Preserving location privacy on your mobile device
          </div>
        </div>
        <div className="flex-none justify-right">
          <div className="p-1 m-2 bg-red-600">
            Updates!
          </div>
        </div>
      </div>
      <div className="flex no-wrap">
        <div className="flex-none p-4 text-xl font-bold">Vision</div>
        <div className="grow">
          <p>
            Location information drives much of the context for the applications we use on our mobile devices. However, for the features of these apps to work we have to provide our GPS location. When we share this information we are trading our privacy for convenience. This trade-off is not always equitable or worth the cost. Sometimes we have to provide full GPS tracking for applications to function at all, in this case the information about our daily life is revealed in full detail.
          </p>
          <p>
            We believe there is an opportunity to create a general purpose open source library to allow individuals to prove their presence at a location. It will use Zero Knowledge techniques to protect the actual location. And it will use a combination of collaborative algorithms run on/by several parties to prove you were in a particular area without sharing your exact coordinates in your location history.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="p-4 w-auto md:w-64 lg:w-80">
          <div className="p-1 font-bold bg-gray-300 underline decoration-2 underline-offset-4">Project</div>
          <div className="m-2 text-gray-800">
           This project is open source software library and tool kit that can be used by application developers and others. It will support the creation of GPS based proof-of-presence techniques that preserve the privacy of the individual. There will be corresponding ZK circuits and validator code examples. It will also be packaged with appropriate documentation. Please help us on this quest and consider joining the project and community!
          </div>
        </div>

        <div className="p-4 w-auto md:w-64 lg:w-80">
          <div className="p-1 font-bold bg-gray-300 underline decoration-2 underline-offset-4">Community</div>
          <div className="m-2 text-gray-800">
            We need your expertise! This project is open source and we will be as transparent as possible. The project is in the beginning stages and you have the opportunity to help shape the outcome. Join our discord server and the project on github.
          </div>
        </div>

        <div className="p-4 w-auto md:w-64 lg:w-80  ">
          <div className="p-1 font-bold bg-gray-300 underline decoration-2 underline-offset-4">Grant &amp; Sponsors</div>
          <div className="m-2 text-gray-800">
            This project is brought to you from the Gitcoin grant and the many generous sponsors to help fund development.
          </div>
        </div>
      </div>
      <div className="flex no-wrap">
        <div className="flex-none p-4 text-xl font-bold">Roadmap</div>
        <div className="grow">
          <p>
            The plan for this ZK Locale library project is…
          </p>
          <p>
            1) Research proof methods for location and time based activities that provide a comfortable level of privacy preservation.
          </p>
          <p>
            2) Build a verification framework for validating proofs accuracy, security, and privacy
          </p><p>
            3) Develop proofs in at least two ZK frameworks to compare with verification framework
          </p><p>
            4) Choose winning proof technique based on validation framework
          </p><p>
            5) Develop initial library and demo application
          </p><p>
            6) Work with community to further develop, improve, validate the library
          </p><p>
            7) Provide several working examples of how to use the ZK locale library in modern software apps (mobile, cloud, web3). 
          </p><p>
            8) Support on-going community growth and open source development efforts
          </p>
          <p>
           The plan is subject to change as we develop a more detailed understand of the problem space and what development options are available at this time. Please check back often or consider joining the community to stay up-to-date.
          </p>
        </div>
      </div>
      <div className="p-6 bg-gray-400 justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 max-w-md mx-auto">
          <div className="whitespace-nowrap">Footer Item 1</div>
          <div className="whitespace-nowrap">Footer Item 1</div>
          <div className="whitespace-nowrap">Footer Item 1</div>
          <div className="whitespace-nowrap">Footer Item 1</div>
          <div className="whitespace-nowrap">Footer Item 1</div>
          <div className="whitespace-nowrap">Footer Item 1</div>
          <div className="whitespace-nowrap">Footer Item 1</div>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
