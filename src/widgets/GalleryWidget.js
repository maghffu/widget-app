import React, { useEffect, useState } from "react";

export default function GalleryWidget() {
  const galleries = [
    "/img/banner.webp",
    "/img/community.webp",
    "/img/icon1.png",
  ];
  return (
    <div style={styles.main}>
      <div style={styles.container}>
        {galleries.map((gallery) => {
          return (
            <div style={styles.imageContainer}>
              <img src={gallery} alt="あ" style={styles.image} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#f0f0f0",
    flexDirection: "column",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    maxWidth: "60vw",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    cursor: "pointer",
  },
  image: {
    width: "300px",
    height: "300px",
    objectFit: "cover",
  },
  imageDescription: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    width: "100%",
    height: "50px",
    backgroundColor: "#000000",
    opacity: "0.5",
  },
  imageDescriptionText: {
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "bold",
  },
};
