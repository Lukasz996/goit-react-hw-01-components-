import PropTypes from 'prop-types';
import c from './Statistics.module.css'

export const Statistics = ({ title, stats }) => (
  <>
  <section className={c.statistics}>
    {title && <h2 className={c.title}>{title}</h2>}

    <ul className={c.statList}>
      {stats.map(stat => {
        const bgcColor = {
          backgroundColor: `rgb(
                ${Math.floor(Math.random() * 256)},
                ${Math.floor(Math.random() * 256)},
                ${Math.floor(Math.random() * 256)}
              )`,
        };

        return (
          <li className={c.item} style={bgcColor} key={stat.id}>
            <span className={c.label}>{stat.label}</span>
            <span className={c.percentage}>{stat.percentage}%</span>
          </li>
        );
      })}
    </ul>
  </section>
</>
);
  

  Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
  };
  
 