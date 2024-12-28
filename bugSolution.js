To solve this, use the `useEffect` hook to check if the parameters are defined before accessing them:

```javascript
import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function MyComponent() {
  const { id } = useParams();
  const location = useLocation();
  const [itemId, setItemId] = useState(null);

  useEffect(() => {
    // Check if id is defined and update the state
    if (id) {
      setItemId(id);
    } else {
      console.log('id is still undefined', location);
    }
  }, [id, location]);

  return (
    <div>
      <h1>Details for {itemId || 'Not found'}</h1>
    </div>
  );
}
```
This revised code waits until the `id` parameter is available before displaying it.  The conditional rendering ensures the app doesn't crash when rendering before route resolution completes.  The use of `useLocation()` provides debugging information.