import React from 'react';

/**
 * Google Map Embed Component
 * 
 * A reusable component for embedding Google Maps using iframe.
 * 
 * @param {string} embedUrl - Google Maps embed URL (required)
 * @param {string} title - Iframe title for accessibility (optional)
 * @param {string} className - Additional CSS classes for the iframe (optional)
 * @param {Object} style - Inline styles for the container div (optional)
 * @param {string|number} height - Iframe height (default: "400px")
 * @param {string|number} width - Iframe width (default: "100%")
 * @param {string} containerClassName - CSS classes for the container div (optional)
 * @param {boolean} allowFullScreen - Allow fullscreen mode (default: true)
 * @param {string} loading - Loading attribute (default: "lazy")
 * @param {string} referrerPolicy - Referrer policy (default: "no-referrer-when-downgrade")
 * 
 * @example
 * ```jsx
 * <GoogleMap 
 *   embedUrl="https://www.google.com/maps/embed?pb=..."
 *   title="Our Location"
 *   height="400"
 * />
 * ```
 */
const GoogleMap = ({
  embedUrl,
  title = "Location Map",
  className = "map",
  style = {},
  height = "400px",
  width = "100%",
  containerClassName = "",
  allowFullScreen = true,
  loading = "lazy",
  referrerPolicy = "no-referrer-when-downgrade"
}) => {
  if (!embedUrl) {
    console.warn('GoogleMap: embedUrl is required');
    return null;
  }

  const containerStyle = {
    width: '100%',
    overflow: 'hidden',
    ...style
  };

  return (
    <div 
      className={containerClassName}
      style={containerStyle}
    >
      <iframe
        className={className}
        title={title}
        src={embedUrl}
        width={width}
        height={height}
        style={{ border: 0 }}
        allowFullScreen={allowFullScreen}
        loading={loading}
        referrerPolicy={referrerPolicy}
      />
    </div>
  );
};

export default GoogleMap;

