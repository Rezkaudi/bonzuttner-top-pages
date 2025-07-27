import { ChangeEvent, ReactNode } from "react";

interface IFormElement {
    label: string,
    isRequired: boolean,
    placeholder?: string,
    fieldName: string,
    elementType: "text" | "select" | "textarea" | "checkbox" | "email" | "number",
    value?: string | number,
    checked?: boolean,
    children?: ReactNode
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
}

const FormElement: React.FC<IFormElement> = ({ label, isRequired, placeholder, fieldName, value, onChange, checked, elementType, children }) => {
    return (
        <div className={`flex w-full text-xs lg:text-base font-normal ${elementType === "checkbox" ? "items-center justify-center flex-row-reverse gap-3" : "items-start justify-between flex-col lg:flex-row gap-3 lg:gap-8"}`}>
            <div className="space-x-5">
                <label htmlFor="typeOfInquiry">{label}</label>
                {isRequired && elementType !== "checkbox" && <span className=" bg-[#FF0004] px-3 text-white">必須</span>}
            </div>

            {elementType === "text" && <input required={isRequired} value={value} onChange={onChange} className="rounded border border-[#C9C9C9] outline-none w-full lg:w-2/3 p-2" placeholder={placeholder} id={fieldName} name={fieldName} type="text" />}
            {elementType === "textarea" && <textarea rows={5} required={isRequired} value={value} onChange={onChange} className="rounded border border-[#C9C9C9] outline-none w-full lg:w-2/3 p-2" placeholder={placeholder} id={fieldName} name={fieldName} />}
            {elementType === "checkbox" && <input required={isRequired} checked={checked} onChange={onChange} className="rounded border border-[#C9C9C9] outline-none p-2" id={fieldName} name={fieldName} type="checkbox" />}
            {elementType === "number" && <input required={isRequired} value={value} onChange={onChange} className="rounded border border-[#C9C9C9] outline-none w-full lg:w-2/3 p-2" placeholder={placeholder} id={fieldName} name={fieldName} type="number" />}
            {elementType === "email" && <input required={isRequired} value={value} onChange={onChange} className="rounded border border-[#C9C9C9] outline-none w-full lg:w-2/3 p-2" placeholder={placeholder} id={fieldName} name={fieldName} type="email" />}
            {elementType === "select" &&
                <select required={isRequired} value={value} onChange={onChange} className="rounded border border-[#C9C9C9] outline-none w-full lg:w-2/3 p-2" id={fieldName} name={fieldName} >
                    {children}
                </select>
            }

        </div>
    )
};

export default FormElement;
