import Navbar from "../components/navbar";
export default function Report() {
    return(
        <main className="min-h-screen">
            <Navbar />
            <ReportUpper />
        </main>

    );
};

const ReportUpper = () => {
    return(
        <div className="tutorial bg-gray-200 p-8">
      <div className="tutorial-upper text-4xl font-bold mx-16 mt-4">
        Report
      </div>
      </div>
    );
};

