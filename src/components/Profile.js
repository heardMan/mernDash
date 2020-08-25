import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const getUserMetadata = async () => {

      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://api.shipDash.com`,
          scope: "read:shipments",
        });

        if (accessToken) {
          setToken(accessToken);

          const url = "http://localhost:3000/shipments"

          const response = await fetch(url, {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          });
          console.log(accessToken);
          const responseData = await response.json();

          //setShowResult(true);
          console.log(responseData);

        }


      } catch (e) {
        console.log(e.message);
      }
    };

    getUserMetadata();
  }, [getAccessTokenSilently]);

  return (
    isAuthenticated && (
      <div>

        <h3>You're Logged In</h3>
        <p>{token}</p>


      </div>
    )
  );
};

export default Profile;