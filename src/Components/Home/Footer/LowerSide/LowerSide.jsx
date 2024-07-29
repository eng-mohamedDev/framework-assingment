export default function LowerSide() {
  const date = new Date("2021");
  const year = date.getFullYear();
  return (
    <div className="bg-gray-800 text-center text-white py-5">
      <h3>Copyright &copy; Your Website {year}</h3>
    </div>
  );
}
