export const Container = ({ children }) => {
    return (
        <div
            className="
                flex flex-col 
                min-h-screen w-full
                items-center justify-start 
                bg-amber-200 text-black
                "
        >
            {children}
        </div>
    );
};