import React, {forwardRef} from 'react'


const Page = forwardRef((props, ref) => {
    return (
        
        <div className="demoPage bg-white "  ref={ref}> 
            
            <p className='h-full'>{props.children}</p>
            <p className='text-xs text-end text-black pb-4'>Page number: {props.number}</p>
        </div>
    );
});

export default Page