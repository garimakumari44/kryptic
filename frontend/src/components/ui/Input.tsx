interface InputProps {
    placeholder: string,
     reference?: any,
     value?: any,
     onChange?: (e:any) => void;
}
 
 
 export function Input({placeholder, reference, value, onChange} :InputProps  ) {
    return <div>
        <input placeholder={placeholder} ref={reference} value={value} onChange={onChange}  type="text" className="py-2 px-4  text-black-600 border rounded m-2 border-stone-800 " />
    </div>
}