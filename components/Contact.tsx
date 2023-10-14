

const Contact = () => {
  return (
    <section id='contact'
    className='max-w-container max-auto py-10 xl:py-32
     flex flex-col gap-4 items-center justify-center'>
       <p className='font-titleFont text-lg text-textGreen font-semibold flex 
       itemss-center tracking-wide'>Are you impressed?</p>
       <h2 className='text-5xl font-titleFont text-textLight font-semibold'>Get In Touch</h2>
       <p className='max-w-[600px] text-center text-textDark'>
       I would be thrilled to discuss your project ideas, 
       provide guidance, or answer any questions you may have. Feel free to reach
        out to me using the <span className='text-green-600'>button below</span>, or alternatively, make use of
        my direct social links below.
         Let us work together to create a captivating online
         presence for your business.
        </p>
        <a href="mailto:timilehin@gmail.com">
            <button className='w-40 h-14 border border-violet-700 mt-6 font-titleFont
            text-sm text-textDark tracking-wider rounded-md hover:bg-hoverColor doration-300'>
                Say Hello
            </button>
        </a>
    </section>
  )
}

export default Contact