import {useState} from "react";

export const useModal = (initialValue = false) => {
const [isOpen,setIsOpen] = useState(initialValue)

const modalOpen = () => { setIsOpen(true)}
const modalClose = () => { setIsOpen(false)}

return[isOpen,modalOpen,modalClose]
}
