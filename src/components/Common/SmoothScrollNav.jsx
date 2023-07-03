import { useHistory } from 'react-router-dom';

function SmoothScrollNav() {
  const history = useHistory();

  const scrollToPriceTable = () => {
    history.push('/home#pricetable');
    setTimeout(() => {
      const element = document.getElementById('pricetable');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  };

  return (
    <div>
      <h1>Asbest Page</h1>
      <button onClick={scrollToPriceTable}>Go to Price Table</button>
    </div>
  );
}

export default SmoothScrollNav