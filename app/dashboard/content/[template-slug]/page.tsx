'use client'
import React from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'

interface PROPS {

    params: {
        'template-slug': string
    }
}

/* Function to Create New Content */
function CreateNewContent (props: PROPS)  {

    const selectedTemplate:TEMPLATE | undefined = Templates?.find((item) => item.slug == props.params['template-slug'])

    const GenerateAIContent = (formData:any) => {
          
    }

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
        {/* FormSection */}
           <FormSection selectedTemplate={selectedTemplate}
           userFormInput={(v:any)=> GenerateAIContent(v)}/>

        {/* OutputSection */}
        <div className='col-span-2'>
            <OutputSection/>
        </div>
           
    </div>
  )
}

export default CreateNewContent