import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { CircleQuestionMark, X } from 'lucide-react'

const HelpModal = ({ open, onClose }) => {
    return (
        <Dialog open={open} onClose={onClose} className="relative z-10 " __demoMode>
            <div className=" max-w-[780px] m-auto absolute top-[77px] fixed inset-0 z-20 ">
                <DialogPanel
                    transition
                    className="relative transform h-full overflow-hidden bg-[#13141C]"
                >
                    <div>
                        <div className='w-full p-2 font-semibold text-2xl
                                        text-white rounded-lg
                                        flex justify-center items-center
                                        bg-[#3e4154] relative'>
                            <DialogTitle as="h3">
                                Cómo jugar
                            </DialogTitle>
                            <button className='absolute right-3 p-1 cursor-pointer' onClick={onClose}>
                                <X className='flex justify-center items-center' />
                            </button>
                        </div>
                        <div className='m-4'>
                            <div className='text-white text-center text-[12px] xs:text-[15px] sm:text-lg'>
                                <p className='mb-4'>Tienes que adivinar la palabra oculta en 6 intentos y el color de las
                                    letras cambia para mostrar lo cerca que estás.
                                </p>
                            </div>
                            <div className='text-white text-center text-[12px] xs:text-[15px] sm:text-lg mb-4'>
                                <p className='mb-4'>
                                    Para comenzar el juego, simplemente ingresa una palabra, por ejemplo:
                                </p>
                            </div>
                            <div className='text-white text-2xl xxs:text-3xl xs:text-4xl font-bold uppercase
                                        flex justify-center items-center gap-2 m-4'>
                                <div className='w-[50px] h-[50px] xxs:h-[60px] xxs:w-[60px] xs:h-[70px] xs:w-[70px] rounded-[8px] flex justify-center items-center bg-[#79B851]'>m</div>
                                <div className='w-[50px] h-[50px] xxs:h-[60px] xxs:w-[60px] xs:h-[70px] xs:w-[70px] rounded-[8px] flex justify-center items-center bg-[#3D4054]'>e</div>
                                <div className='w-[50px] h-[50px] xxs:h-[60px] xxs:w-[60px] xs:h-[70px] xs:w-[70px] rounded-[8px] flex justify-center items-center bg-[#F3C237]'>d</div>
                                <div className='w-[50px] h-[50px] xxs:h-[60px] xxs:w-[60px] xs:h-[70px] xs:w-[70px] rounded-[8px] flex justify-center items-center bg-[#3D4054]'>i</div>
                                <div className='w-[50px] h-[50px] xxs:h-[60px] xxs:w-[60px] xs:h-[70px] xs:w-[70px] rounded-[8px] flex justify-center items-center bg-[#79B851]'>o</div>
                            </div>
                            <div className='flex justify-center items-center mb-3'>
                                <div className='text-white bg-[#313448]/30 min-w-[70%] flex flex-col gap-3 items-start p-6 m-auto rounded-[8px]'>
                                    <p className='text-center flex text-[12px] xs:text-[15px]'>
                                        <span className='rounded-[2px] font-bold uppercase w-[20px] h-[20px] xxs:w-[25px] xxs:h-[25px] xs:w-[30px] xs:h-[30px] bg-[#3D4054] flex justify-center items-center'>e</span>
                                        &nbsp;,&nbsp;
                                        <span className='rounded-[2px] font-bold uppercase w-[20px] h-[20px] xxs:w-[25px] xxs:h-[25px] xs:w-[30px] xs:h-[30px] bg-[#3D4054] flex justify-center items-center'>i</span>
                                        &nbsp;no está en la palabra objetivo en absoluto.
                                    </p>
                                    <p className='text-center flex text-[12px] xs:text-[15px]'>
                                        <span className='rounded-[2px] font-bold uppercase w-[20px] h-[20px] xxs:w-[25px] xxs:h-[25px] xs:w-[30px] xs:h-[30px] bg-[#F3C237] flex justify-center items-center'>d</span>
                                        &nbsp; está en la palabra pero en el lugar equivocado.
                                    </p>
                                    <p className='text-center flex text-[12px] xs:text-[15px]'>
                                        <span className='rounded-[2px] font-bold uppercase w-[20px] h-[20px] xxs:w-[25px] xxs:h-[25px] xs:w-[30px] xs:h-[30px] bg-[#79B851] flex justify-center items-center'>m</span>
                                        &nbsp;,&nbsp;
                                        <span className='rounded-[2px] font-bold uppercase w-[20px] h-[20px] xxs:w-[25px] xxs:h-[25px] xs:w-[30px] xs:h-[30px] bg-[#79B851] flex justify-center items-center'>o</span>
                                        &nbsp; está en la palabra y en el lugar correcto.
                                    </p>
                                </div>
                            </div>
                            <div className='text-white text-[12px] xs:text-[15px]'>
                                <p className='text-center'>Otro intento de encontrar letras coincidentes en la palabra objetivo.</p>
                                <div className='text-white uppercase
                                        gap-3 m-4 flex flex-col '>
                                    <div className='flex justify-center items-center gap-2 text-2xl xxs:text-3xl xs:text-4xl font-bold'>
                                        <div className='w-[50px] h-[50px] xxs:h-[60px] xxs:w-[60px] xs:h-[70px] xs:w-[70px] rounded-[8px] flex justify-center items-center bg-[#3D4054]'>p</div>
                                        <div className='w-[50px] h-[50px] xxs:h-[60px] xxs:w-[60px] xs:h-[70px] xs:w-[70px] rounded-[8px] flex justify-center items-center bg-[#79B851]'>u</div>
                                        <div className='w-[50px] h-[50px] xxs:h-[60px] xxs:w-[60px] xs:h-[70px] xs:w-[70px] rounded-[8px] flex justify-center items-center bg-[#79B851]'>n</div>
                                        <div className='w-[50px] h-[50px] xxs:h-[60px] xxs:w-[60px] xs:h-[70px] xs:w-[70px] rounded-[8px] flex justify-center items-center bg-[#3D4054]'>t</div>
                                        <div className='w-[50px] h-[50px] xxs:h-[60px] xxs:w-[60px] xs:h-[70px] xs:w-[70px] rounded-[8px] flex justify-center items-center bg-[#79B851]'>o</div>
                                    </div>
                                    <span className='text-[12px] xs:text-[15px] font-semibold capitalize text-center'>¡Tan cerca!</span>
                                    <div className='flex justify-center items-center gap-2 text-2xl xxs:text-3xl xs:text-4xl font-bold'>
                                        <div className='w-[50px] h-[50px] xxs:h-[60px] xxs:w-[60px] xs:h-[70px] xs:w-[70px] rounded-[8px] flex justify-center items-center bg-[#79B851]'>m</div>
                                        <div className='w-[50px] h-[50px] xxs:h-[60px] xxs:w-[60px] xs:h-[70px] xs:w-[70px] rounded-[8px] flex justify-center items-center bg-[#79B851]'>u</div>
                                        <div className='w-[50px] h-[50px] xxs:h-[60px] xxs:w-[60px] xs:h-[70px] xs:w-[70px] rounded-[8px] flex justify-center items-center bg-[#79B851]'>n</div>
                                        <div className='w-[50px] h-[50px] xxs:h-[60px] xxs:w-[60px] xs:h-[70px] xs:w-[70px] rounded-[8px] flex justify-center items-center bg-[#79B851]'>d</div>
                                        <div className='w-[50px] h-[50px] xxs:h-[60px] xxs:w-[60px] xs:h-[70px] xs:w-[70px] rounded-[8px] flex justify-center items-center bg-[#79B851]'>o</div>
                                    </div>
                                    <span className='text-[12px] xs:text-[15px] font-semibold capitalize text-center'>¡Palabra adivinada! 🏆</span>

                                </div>
                            </div>

                        </div>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
}

export default HelpModal;