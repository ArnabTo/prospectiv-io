const calculateReadingTime = (body: any[]): string => {
    const wordsPerMinute = 200; // Average reading speed
    // Extract the plain text from the body array
    const plainText = body
        .map((block) => 
            block.children ? block.children.map((child:any) => child.text).join(" ") : ""
        )
        .join(" ");
    const words = plainText.split(/\s+/).filter(Boolean).length; // Split by whitespace and filter empty strings
    const minutes = Math.ceil(words / wordsPerMinute);

    return `${minutes} min read`;
};

export default calculateReadingTime;