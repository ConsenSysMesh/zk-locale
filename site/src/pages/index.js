import * as React from 'react';
import Layout from '../components/layout';

function IndexPage() {
  return (
    <Layout>
      <div className='flex items-center h-64 bg-gray-500 justify-center'>
        <div className='text-4xl'>
          Hero block
        </div>
      </div>
      <div className='flex no-wrap h-16 bg-indigo-500 items-center'>
        <div className='grow text-xl m-4 text-white justify-left'>
          ZK Locale
        </div>
        <div className='flex-none justify-right'>
          <div className='p-1 m-2 bg-red-600'>
            Updates!
          </div>
        </div>
      </div>
      <div className='flex flex-wrap'>

        <div className='p-4 w-auto md:w-64'>
          <div className='p-1 font-bold bg-gray-300 underline decoration-2 underline-offset-4'>Heading</div>
          <div className='m-2 text-gray-800'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc non blandit massa enim nec dui nunc. Luctus accumsan tortor posuere ac. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Massa placerat duis ultricies lacus. Nulla facilisi etiam dignissim diam quis enim. Dolor purus non enim praesent elementum. Arcu non sodales neque sodales.
          </div>
        </div>

        <div className='p-4 w-auto md:w-64'>
          <div className='p-1 font-bold bg-gray-300 underline decoration-2 underline-offset-4'>Heading</div>
          <div className='m-2 text-gray-800'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc non blandit massa enim nec dui nunc. Luctus accumsan tortor posuere ac. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Massa placerat duis ultricies lacus. Nulla facilisi etiam dignissim diam quis enim. Dolor purus non enim praesent elementum. Arcu non sodales neque sodales.
          </div>
        </div>

        <div className='p-4 w-auto md:w-64'>
          <div className='p-1 font-bold bg-gray-300 underline decoration-2 underline-offset-4'>Heading</div>
          <div className='m-2 text-gray-800'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc non blandit massa enim nec dui nunc. Luctus accumsan tortor posuere ac. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Massa placerat duis ultricies lacus. Nulla facilisi etiam dignissim diam quis enim. Dolor purus non enim praesent elementum. Arcu non sodales neque sodales.
          </div>
        </div>

      </div>
      <div className='p-6 bg-gray-400 justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-1 max-w-md mx-auto'>
          <div className='whitespace-nowrap'>Footer Item 1</div>
          <div className='whitespace-nowrap'>Footer Item 1</div>
          <div className='whitespace-nowrap'>Footer Item 1</div>
          <div className='whitespace-nowrap'>Footer Item 1</div>
          <div className='whitespace-nowrap'>Footer Item 1</div>
          <div className='whitespace-nowrap'>Footer Item 1</div>
          <div className='whitespace-nowrap'>Footer Item 1</div>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
                        