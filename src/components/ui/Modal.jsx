import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const Modal = ({ isOpen, onClose, onReset, word, game }) => {
    if (game.gameState.win === null || game.gameState.win === undefined) return null;

    const handleReset = () => {
        onReset();
    }

    return (
        <div>
            <Dialog open={isOpen} onClose={onClose} className="relative z-4">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in dark:bg-gray-900/50"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-xxs  data-closed:sm:translate-y-0 data-closed:sm:scale-95 dark:bg-gray-800 dark:outline dark:-outline-offset-1 dark:outline-white/10"
                        >
                            <div className="bg-white flex justify-center px-4 pt-5 pb-4 sm:p-6 sm:pb-4 dark:bg-gray-800">
                                <div className="sm:flex sm:items-start">
                                    {/*<div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10 dark:bg-red-500/10">
                                        <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-600 dark:text-red-400" />
                                    </div>*/}
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left ">
                                        <DialogTitle as="h3" className="text-base font-semibold text-yellow-500 sm:text-xl ">
                                            {game.gameState.win ? "¡Ganaste! 🏆" : "¡Perdiste! 💀"}
                                        </DialogTitle>

                                        {/*<div className="mt-2">
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                Are you sure you want to deactivate your account? All of your data will be permanently removed.
                                                This action cannot be undone.
                                            </p>
                                        </div>*/}
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white flex justify-center p-4 dark:bg-gray-800'>
                                <div className="text-center">
                                    <h3 className="text-white">Palabra:</h3>
                                    <p className="text-green-400 font-bold uppercase" >{word}</p>
                                </div>
                            </div>
                            <div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 bg-gray-700/25">
                                <button
                                    type="button"
                                    onClick={handleReset}
                                    className="inline-flex w-full justify-center rounded-md cursor-pointer bg-green-600/90 hover:bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs sm:ml-3 sm:w-auto dark:shadow-none"
                                >
                                    REINICIAR
                                </button>
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="mt-3 inline-flex w-full justify-center rounded-md cursor-pointer px-3 py-2 text-sm font-semibold  shadow-xs  sm:mt-0 sm:w-auto bg-white/10 text-white dark:shadow-none hover:bg-white/20"
                                >
                                    CERRAR
                                </button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}

export default Modal;