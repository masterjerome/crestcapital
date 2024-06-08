type headerProps = {
    page: string;
}
const Header = ({page}: headerProps) => {

    return ( 
        <main>
            <div className="flex justify-between items-center px-4 md:px-6 xl:px-8 py-4 lg:border-b border-[#767680] border-opacity-10">
                <p className="text-xl xl:text-2xl font-semibold text-[#020100] capitalize">{page}</p>          
            </div>
        </main>
     );
}
 
export default Header;