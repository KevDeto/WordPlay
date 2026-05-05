export const Container = ({ children }) => {
    return (
        <div
            className="
                flex flex-col 
                min-h-screen w-full
                items-center justify-start 
                bg-[#13141C] text-black
                "
        >
            {children}
        </div>
    );
};