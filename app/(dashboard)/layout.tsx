import  Header  from "@/components/Header";

type Props = {
    children:React.ReactNode;
};

const dashboardLayout = ({children} : Props) => {
    return ( 
        <>
            <Header />
            <main className="ox-3 lg:px-14">
                {children}
            </main>
        </>
     );
}
 
export default dashboardLayout;