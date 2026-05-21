import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { Settings, X } from 'lucide-react'

const SettingsModal = ({ open, onClose, onWordLengthChange, currentLength }) => {
    const [selectedLength, setSelectedLength] = useState(currentLength);

    const handleSave = (length) => {
        setSelectedLength(length);
        onWordLengthChange(length);
        onClose();
    }

    return (
        <Dialog open={open} onClose={onClose} className="relative z-10" __demoMode>
            <div className="max-w-[780px] m-auto mt-[77px] mb-[22px] fixed inset-0 z-30 ">
                <DialogPanel
                    transition
                    className="relative transform h-full overflow-hidden bg-[#13141C]"
                >
                    <div className='w-full p-2 font-semibold text-2xl
                                        text-white rounded-lg
                                        flex justify-center items-center
                                        bg-[#3e4154] relative'>
                        <DialogTitle as="h3">
                            Ajustes
                        </DialogTitle>
                        <button className='absolute right-3 p-1 cursor-pointer' onClick={onClose}>
                            <X className='flex justify-center items-center' />
                        </button>
                    </div>
                    <div className="bg-[#13141C]">
                        <div className="">
                            <div className="mt-3 text-center w-full ">

                                <div className="mt-4 w-[50%] flex flex-col mx-auto">
                                    <label className="text-[12px] xxs:text-[15px] sm:text-lg
                                                     font-medium text-gray-300 mb-2 text-center">
                                        Número de letras
                                    </label>
                                    <div className='flex justify-center items-center'>
                                        <div className="flex gap-3">
                                            {[4, 5, 6].map((length) => (
                                                <button
                                                    key={length}
                                                    onClick={() => handleSave(length)}
                                                    className={`flex px-3 py-1 xxs:px-4 xxs:py-2 rounded-lg font-bold transition-all cursor-pointer
                                                        text-[12px] xxs:text-[15px] sm:text-lg
                                                        ${selectedLength === length
                                                            ? 'bg-[#79B851] text-white'
                                                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                                        }`}
                                                >
                                                    {length} letras
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <p className="mt-3 mb-3 text-xs text-gray-400">
                                        Cambiar la longitud reiniciará la partida actual
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
}

export default SettingsModal;