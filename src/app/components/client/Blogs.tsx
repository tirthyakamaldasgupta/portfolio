import {Box, Button, Heading, Link, SimpleGrid, Text} from "@chakra-ui/react";
import {faHashnode, faMedium} from "@fortawesome/free-brands-svg-icons";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Blogs() {
    const blogs = [{
        blogTitle: "Effortlessly collect enquiries: How you can use Vercel Serverless Functions and FastAPI to send enquiry submissions to Google Sheets, for portfolio!",
        publishDate: "Apr 2, 2023",
        readTime: "17 min",
        blogDescription: "To facilitate user queries on my portfolio site, which is currently being developed, I am offering two options for submitting inquiries: emailing me directly or filling out a simple form. To ensure the best user experience for the latter option, I have two constraints: Data Storage and Scalability. Explore the solution that involves developing a FastAPI server and deploying it on Vercel Serverless Functions, to efficiently store enquiry data in a Google Sheet and address the challenges at hand.",
        platforms: [{
            platformIcon: faMedium,
            platformIconColor: "#000000",
            link: "https://medium.com/@tirthyakamaldasgupta12/effortlessly-collect-enquiries-how-i-used-vercel-serverless-functions-and-fastapi-to-send-enquiry-ef3416a2662d"
        }, {
            platformIcon: faHashnode,
            platformIconColor: "#2962FF",
            link: "https://tirthya-kamal-dasgupta.hashnode.dev/effortlessly-collect-enquiries-how-you-can-use-vercel-serverless-functions-and-fastapi-to-send-enquiry-submissions-to-google-sheets-for-portfolio"
        }],
        tags: ["Vercel", "Serverless", "FastAPI", "Python", "Google Sheets API"]
    }, {
        blogTitle: "Effortlessly document your code with Mintlify Doc Writer",
        publishDate: "Feb 12, 2023",
        readTime: "2 min",
        blogDescription: "Continuously documenting your code base is important during the development process. If you seek to streamline documentation efforts and prioritize development, you can use the Mintlify Doc Writer extension to effortlessly generate high-quality documentation for your code directly within VS Code.",
        platforms: [{
            platformIcon: faMedium,
            platformIconColor: "#000000",
            link: "https://medium.com/@tirthyakamaldasgupta12/effortlessly-document-your-code-with-mintlify-doc-writer-1c6dc5b32a15"
        }, {
            platformIcon: faHashnode,
            platformIconColor: "#2962FF",
            link: "https://tirthya-kamal-dasgupta.hashnode.dev/effortlessly-document-your-code-with-mintlify-doc-writer"
        }],
        tags: ["VSCode Extensions", "Mintlify", "Productivity", "Documentation", "AI Tools"]
    }, {
        blogTitle: "Visualize the flow of your application right within VS Code with Mermaid",
        publishDate: "Feb 6, 2023",
        readTime: "7 min",
        blogDescription: "It is common for individuals to have a strong desire to swiftly implement a process or solution during its development, without first taking the time to visualize its flow. Discover how you can visualize the flow of your application using Mermaid, a tool that can be integrated into VS Code.",
        platforms: [{
            platformIcon: faMedium,
            platformIconColor: "#000000",
            link: "https://medium.com/@tirthyakamaldasgupta12/visualize-the-flow-of-your-application-right-within-vs-code-with-mermaid-55e234ba4be0"
        }],
        tags: ["VSCode", "Visualization", "Flowchart", "MermaidJS", "Productivity"]
    }, {
        blogTitle: "Simple python script to fetch the equivalent price of 1 Dogecoin in the local currency",
        publishDate: "Apr 18, 2021",
        readTime: "3 min",
        blogDescription: "See how I have developed a basic Python script designed to retrieve the current exchange rate of 1 Dogecoin in the user's local currency.",
        platforms: [{
            platformIcon: faMedium,
            platformIconColor: "#000000",
            link: "https://medium.com/@tirthyakamaldasgupta12/simple-python-script-to-fetch-the-equivalent-price-of-1-dogecoin-in-the-local-currency-5d88e09dcd46"
        }],
        tags: ["Python", "Web Scraping", "Dogecoin", "Automation", "Requests Library"]
    }];

    return (<>
        <SimpleGrid id="blogs-grid" columns={[1, 2]} spacing={1} padding={4}>
            <Box>
                <Heading size="md" color="#000000">BLOGS</Heading>
            </Box>
        </SimpleGrid>

        <SimpleGrid columns={1} spacing={1} padding={4}>
            <Box>
                {blogs.map((blog, index) => (<Box key={index} marginBottom={8}>
                    <Heading size="sm" color="#000000" marginBottom={2}>{blog.blogTitle}</Heading>
                    <Heading size="sm" marginBottom={2}
                             fontWeight="normal">{blog.publishDate} | {blog.readTime}</Heading>
                    <Text marginY={5}>{blog.blogDescription}</Text>
                    <Heading size="sm" marginBottom={2}>Read more on</Heading>
                    {blog.platforms.map((platform, platformIndex) => (
                        <Button key={platformIndex} as={Link} href={platform.link} target={"_blank"}
                                rel={"noopener noreferrer"} backgroundColor={"transparent"}
                                textDecoration={"none"} _hover={{textDecoration: "none"}} color={"#000000"}
                                rightIcon={<FontAwesomeIcon icon={faArrowRight}/>}
                                leftIcon={<FontAwesomeIcon icon={platform.platformIcon}
                                                           color={platform.platformIconColor}/>}/>))}
                </Box>))}
            </Box>
        </SimpleGrid>
    </>)
}
