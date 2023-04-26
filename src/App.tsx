import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/type";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  const [isTopOfPage, setTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      setTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="app bg-gray-20">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>
    </>
  );
}

export default App;
