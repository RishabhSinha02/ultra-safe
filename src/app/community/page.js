import Navbar from "../components/navbar";
export default function Community() {
    return(
        <main className="min-h-screen">
            <Navbar />
            <CommunityUpper />
        </main>

    );
};

const CommunityUpper = () => {
    return(
        <div className="tutorial bg-gray-200 p-8">
      <div className="tutorial-upper text-4xl font-bold mx-16 mt-4">
        Community Forum
      </div>
      </div>
    );
};

