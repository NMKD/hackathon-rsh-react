import { Link } from "react-router-dom";
import { AppRoute } from "../constants";

const NotFoundPage = () => {
  return (
    <div className="bg-indigo-900 relative overflow-hidden h-screen">
      <img
        src="https://external-preview.redd.it/4MddL-315mp40uH18BgGL2-5b6NIPHcDMBSWuN11ynM.jpg?width=960&crop=smart&auto=webp&s=b98d54a43b3dac555df398588a2c791e0f3076d9"
        className="absolute h-full w-full object-cover" alt=""
      />
      <div className="inset-0 bg-black opacity-25 absolute">
      </div>
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div className="w-full font-mono flex flex-col items-center relative z-10">
          <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
            Ты здесь совсем один
          </h1>
          <p className="font-extrabold text-2xl text-center text-blue-300 leading-tight mt-4">
            <Link to={AppRoute.Root}>Следуй на главную</Link>
          </p>
          <p className="font-extrabold text-8xl my-44 text-white animate-bounce">
            404
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
