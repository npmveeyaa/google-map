# @veeyaainnovatives/google-map

A reusable Google Maps embed component for React applications.

## Features

- 🗺️ Google Maps iframe embed
- 🎨 Customizable styling and dimensions
- 📱 Fully responsive
- ♿ Accessible with proper title attributes
- 🔧 Flexible configuration options

## Installation

```bash
npm install @veeyaainnovatives/google-map
```

## Peer Dependencies

This package requires the following peer dependencies:

- `react` (^16.8.0 || ^17.0.0 || ^18.0.0)
- `react-dom` (^16.8.0 || ^17.0.0 || ^18.0.0)

## Usage

### Basic Example

```jsx
import { GoogleMap } from '@veeyaainnovatives/google-map';

function App() {
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3614.2169961248137!2d80.23461943155804!3d13.031214537357242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1766340878766!5m2!1sen!2sin";

  return (
    <GoogleMap 
      embedUrl={embedUrl}
      title="Our Location"
    />
  );
}
```

### Advanced Example with Custom Styling

```jsx
import { GoogleMap } from '@veeyaainnovatives/google-map';

function App() {
  const embedUrl = "https://www.google.com/maps/embed?pb=...";

  return (
    <GoogleMap 
      embedUrl={embedUrl}
      title="Our Location"
      height="410"
      className="custom-map"
      style={{
        borderRadius: '22px',
        overflow: 'hidden'
      }}
      containerClassName="map-container"
    />
  );
}
```

### Getting Google Maps Embed URL

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your location
3. Click on "Share" button
4. Select "Embed a map"
5. Copy the iframe src URL
6. Use it as the `embedUrl` prop

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `embedUrl` | `string` | Yes | - | Google Maps embed URL |
| `title` | `string` | No | `"Location Map"` | Iframe title for accessibility |
| `className` | `string` | No | `"map"` | CSS classes for the iframe |
| `style` | `object` | No | `{}` | Inline styles for the container div |
| `height` | `string\|number` | No | `"400px"` | Iframe height |
| `width` | `string\|number` | No | `"100%"` | Iframe width |
| `containerClassName` | `string` | No | `""` | CSS classes for the container div |
| `allowFullScreen` | `boolean` | No | `true` | Allow fullscreen mode |
| `loading` | `string` | No | `"lazy"` | Loading attribute ("lazy" or "eager") |
| `referrerPolicy` | `string` | No | `"no-referrer-when-downgrade"` | Referrer policy |

## Examples

### Contact Page Map

```jsx
<GoogleMap 
  embedUrl={contactData.map.embed_url}
  title="Our location"
  height="410"
  style={{
    borderRadius: '22px',
    overflow: 'hidden'
  }}
/>
```

### Footer Map

```jsx
<GoogleMap 
  embedUrl={contactData.map.embed_url}
  title="SDS Location"
  height="200"
  width="100%"
  style={{
    border: 0,
    borderRadius: '8px'
  }}
/>
```

## Styling

The component uses a container div with the iframe inside. You can style both:

- **Container**: Use `containerClassName` and `style` props
- **Iframe**: Use `className` prop

The iframe has `border: 0` by default. You can override this with custom CSS.

## License

MIT

## Author

[Veeyaa Innovatives](https://www.veeyaainnovatives.com)

