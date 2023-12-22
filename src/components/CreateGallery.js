import React from 'react'

const CreateGallery = () => {
  return (
    <>
    <div className='py-10 '>
<div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form onSubmit={handleImage} className="space-y-4">
          
         
          <div>
            <label className="sr-only" htmlFor="message">Image</label>
            <input type='text' name='image' onChange={()=>setImage("https://res.cloudinary.com/dgnwuin55/image/upload/v1702411034/bhcnag34hrvzmu7lsrqa.png")}  className="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Message"  id="message"  />
          </div>
          <div className="mt-4">
            <button type="submit" className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">
              Send Enquiry
            </button>
          </div>
        </form>
      </div>
</div>
    </>
  )
}

export default CreateGallery