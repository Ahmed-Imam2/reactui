Icon example:

```js
const icons = [
    'soccer',
    'football',
    'basketball',
    'tennis',
    'esports',
    'allsports'
];
<div>
  {icons.map(icon => (
    <div key={icon}>
      <p>{icon}</p>
      <StaticIcon type={icon} />
      <StaticIcon type={icon} size={25} />
      <StaticIcon type={icon} size={30} />
      <StaticIcon type={icon} size={35} />
      <StaticIcon type={icon} size={40} />
      <StaticIcon type={icon} size={45} />
      <StaticIcon type={icon} size={45} color="rgb(209, 36, 155)" />
      <StaticIcon type={icon} size={45} color="rgb(105, 51, 193)" />
      <StaticIcon type={icon} size={45} color="rgb(18, 124, 193)" />
      <StaticIcon type={icon} size={45} color="rgb(36, 162, 87)" />
      <StaticIcon type={icon} size={45} color="rgb(209, 128, 46)" />
      <div style={{ background: '#364a58', display: 'inline-block' }}>
        <StaticIcon type={icon} size={45} color="rgb(209, 36, 155)" />
        <StaticIcon type={icon} size={45} color="rgb(105, 51, 193)" />
        <StaticIcon type={icon} size={45} color="rgb(18, 124, 193)" />
        <StaticIcon type={icon} size={45} color="rgb(36, 162, 87)" />
        <StaticIcon type={icon} size={45} color="rgb(209, 128, 46)" />
      </div>
    </div>
  ))}
</div>;
```
### Single Usage
import { StaticIcons } from '@song88/react-components'

"StaticIcons type="esports" size={} color={} style={{}}"
