const HomePage = () => {
  return (
    <div className="bg-gray-800 flex flex-col items-center justify-center min-w-[100vw] min-h-[100vh]">
      <h1 className="text-4xl text-gray-100 mb-2 max-w-[360px]">
        {'Description'}
      </h1>
      <p className="text-xl text-gray-400 max-w-[360px]">
        {'This playground serves as a testing ground for creating stunning 3D scenes, animations, and visualizations using the Three.js library within the React framework.'}
      </p>
    </div>
  );
};

export { HomePage };
