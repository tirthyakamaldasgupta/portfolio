import {
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    Heading,
    HStack,
    Input,
    Link,
    SimpleGrid,
    Text,
    useBreakpointValue,
    Wrap,
    WrapItem
} from "@chakra-ui/react";
import {faGithub, faHashnode, faLinkedin, faMedium, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faArrowRight, faCheckDouble} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {SetStateAction, useState} from "react";
import CoffeeCupIcon from "./icons/CoffeeCupIcon";
import {InfinitySpin} from "react-loader-spinner";

export default function Connect() {
    const isMaxScreen = useBreakpointValue({base: true, md: true});

    const socialAccounts = [{
        icon: faLinkedin, color: "#0a66c2", link: "https://www.linkedin.com/in/tirthya-kamal-dasgupta/"
    }, {
        icon: faMedium, color: "#000000", link: "https://medium.com/@tirthyakamaldasgupta12"
    }, {
        icon: faHashnode, color: "#2962FF", link: "https://tirthya-kamal-dasgupta.hashnode.dev/"
    }, {
        icon: faGithub, color: "#000000", link: "https://github.com/tirthyakamaldasgupta"
    }, {
        icon: faYoutube, color: "#ff0000", link: "https://www.youtube.com/channel/UCnESi7g2P7lhhJ1Jy36SuqA"
    }];

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [message, setMessage] = useState("");

    const [firstNameError, setFirstNameError] = useState(true);
    const [lastNameError, setLastNameError] = useState(true);
    const [emailError, setEmailError] = useState(true);
    const [messageError, setMessageError] = useState(true);

    const [formError, setFormError] = useState(false);

    const [formSubmitting, setFormSubmitting] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formSubmissionError, setFormSubmissionError] = useState(false);
    const [formSubmissionErrorMessage, setFormSubmissionErrorMessage] = useState("");

    const handleFirstNameChange = (e: { target: { value: any; }; }) => {
        setFormError(false);

        const value = e.target.value;

        setFirstName(value);

        setFirstNameError(value === "");
    };

    const handleLastNameChange = (e: { target: { value: any; }; }) => {
        setFormError(false);

        const value = e.target.value;

        setLastName(value);

        setLastNameError(value === "");
    };

    const handleEmailChange = (e: { target: { value: any; }; }) => {
        setFormError(false);

        const value = e.target.value;

        setEmail(value);

        setEmailError(value === "");
    };

    const handleCompanyNameChange = (e: {
        target: { value: SetStateAction<string>; };
    }) => setCompanyName(e.target.value);

    const handleMessageChange = (e: { target: { value: any; }; }) => {
        setFormError(false);

        const value = e.target.value;

        setMessage(value);

        setMessageError(value === "");
    };

    const handleNewEnquiryFormInitialisation = () => {
        setFormSubmitted(false);

        setFirstName("");
        setLastName("");
        setEmail("");
        setCompanyName("");
        setMessage("");
    };

    const handleFormSubmit = () => {
        const formHasError = firstName === "" || lastName === "" || email === "" || message === "";

        setFormError(formHasError);

        if (!formHasError) {
            setFormSubmissionError(false);
            setFormSubmissionErrorMessage("");
            setFormSubmitting(true);

            const currentDate = new Date();
            const localTimestampInEpoch = currentDate.getTime() - (currentDate.getTimezoneOffset() * 60000);

            const headers = {
                "Content-Type": "application/json; charset=utf-8"
            };

            const data = {
                timestamp: localTimestampInEpoch,
                first_name: firstName,
                last_name: lastName,
                email: email,
                company: companyName,
                message: message
            };

            fetch(`${process.env.NEXT_PUBLIC_ENQUIRY_FORM_SUBMISSION_ENDPOINT}`, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(data),
                redirect: "follow"
            })
                .then(response => response.json())
                .then(result => {
                    setFormSubmitting(false);

                    if (result.message === "Enquiry added successfully") {
                        setFormSubmitted(true);
                        setFormSubmissionError(false);
                        setFormSubmissionErrorMessage("");
                    }
                })
                .catch(error => {
                    console.log(error);
                    setFormSubmitting(false);
                    setFormSubmissionError(true);
                    setFormSubmissionErrorMessage("I am sorry, but it looks like there was an error processing your request. I have been notified of the issue and I am working to resolve it as soon as possible. In the meantime, if you have any questions or need further assistance, please feel free to email me directly. Thank you for your patience and understanding.");
                });
        }
    }

    return (<>
        <SimpleGrid id="connect-grid" columns={[1, 2]} spacing={1} padding={4}>
            <Box>
                <Heading size="md" color="#000000">CONNECT WITH ME</Heading>
            </Box>
        </SimpleGrid>

        <SimpleGrid columns={[1, 2]} spacing={10} padding={4}>
            <Box>
                <Heading size={"sm"} marginBottom={5}>Drop me an email on</Heading>
                <Flex direction={isMaxScreen ? "column" : "row"} flexWrap={isMaxScreen ? "wrap" : "nowrap"}>
                    <Flex direction="column" marginRight={!isMaxScreen ? 2 : 0} marginBottom={isMaxScreen ? 2 : 0}>
                        <Button as={Link} href="mailto:dasguptatirthyakamal@gmail.com"
                                width={isMaxScreen ? "100%" : "auto"} colorScheme="red" textDecoration={"none"}
                                _hover={{textDecoration: "none"}}>dasguptatirthyakamal@gmail.com</Button>
                    </Flex>
                    <Flex direction="column" marginRight={!isMaxScreen ? 2 : 0} marginBottom={isMaxScreen ? 2 : 0}>
                        <Button as={Link} href="mailto:dasguptatirthyakamal@outlook.com"
                                width={isMaxScreen ? "100%" : "auto"} colorScheme="blue" textDecoration={"none"}
                                _hover={{textDecoration: "none"}}>dasguptatirthyakamal@outlook.com</Button>
                    </Flex>
                </Flex>

                <Heading size={"sm"} marginY={5}>Call or WhatsApp me on</Heading>
                <Flex direction={isMaxScreen ? "column" : "row"} flexWrap={isMaxScreen ? "wrap" : "nowrap"}>
                    <Flex direction="column" marginRight={!isMaxScreen ? 2 : 0} marginBottom={isMaxScreen ? 2 : 0}>
                        <Button as={Link}
                                href="tel:+91 8240693916" width={isMaxScreen ? "100%" : "auto"} colorScheme="green"
                                textDecoration="none" _hover={{textDecoration: "none"}}>
                            +91 8240693916
                        </Button>
                    </Flex>
                    <Flex direction="column" marginRight={!isMaxScreen ? 2 : 0} marginBottom={isMaxScreen ? 2 : 0}>
                        <Button as={Link} href="tel:+91 8017352824" width={isMaxScreen ? "100%" : "auto"}
                                colorScheme="green" textDecoration="none" _hover={{textDecoration: "none"}}>
                            +91 8017352824
                        </Button>
                    </Flex>
                </Flex>

                <Heading size={"sm"} marginY={5}>
                    If you live nearby, we can always sit over a cup of <CoffeeCupIcon fontSize={"xl"}/> at
                </Heading>

                <Text>Block B and C, New Tollygunge, Aurobindo Park, South Kolkata, West Bengal 700093</Text>

                <Heading size={"sm"} marginY={5}>Follow me on</Heading>
                <Wrap spacing={1}>
                    {socialAccounts.map((socialAccount, index) => (
                        <WrapItem key={index}>
                            <Link href={socialAccount.link} isExternal marginRight={3}>
                                <FontAwesomeIcon icon={socialAccount.icon} size="2xl" color={socialAccount.color}/>
                            </Link>
                        </WrapItem>))}
                </Wrap>
            </Box>

            <Box>
                {formSubmitting ? (
                    <Flex justifyContent="center" alignItems="center" height="100%">
                        <InfinitySpin width="200" color="#03C988"/>
                    </Flex>
                ) : formSubmitted ? (
                    <Flex direction="column" justifyContent="center" alignItems="center">
                        <FontAwesomeIcon
                            icon={faCheckDouble}
                            color="#03C988"
                            style={{marginBottom: 2, width: "20%", height: "20%"}}
                        />
                        <Heading fontSize={"xl"}>Enquiry submitted!</Heading>
                        <HStack marginTop={3}>
                            <Text>Want to submit another enquiry?</Text>
                            <Button type="button" colorScheme="blackAlpha" onClick={handleNewEnquiryFormInitialisation}>
                                <Text>Click here</Text>
                                <FontAwesomeIcon icon={faArrowRight} style={{marginLeft: "5px"}}/>
                            </Button>
                        </HStack>
                    </Flex>
                ) : (
                    <>
                        <FormControl isRequired isInvalid={firstNameError} paddingBottom={4}>
                            <Input
                                type="text"
                                variant="flushed"
                                borderBottomColor={"#526D82"}
                                placeholder="First name *"
                                value={firstName}
                                onChange={handleFirstNameChange}
                                _placeholder={{color: "inherit", fontWeight: "bold"}}
                            />
                            {firstNameError ? (
                                <FormErrorMessage>First name is required.</FormErrorMessage>
                            ) : (
                                <></>
                            )}
                        </FormControl>
                        <FormControl isRequired isInvalid={lastNameError} paddingBottom={4}>
                            <Input
                                type="text"
                                variant="flushed"
                                borderBottomColor={"#526D82"}
                                placeholder="Last name *"
                                value={lastName}
                                onChange={handleLastNameChange}
                                _placeholder={{color: "inherit", fontWeight: "bold"}}
                            />
                            {lastNameError ? (
                                <FormErrorMessage>Last name is required.</FormErrorMessage>
                            ) : (
                                <></>
                            )}
                        </FormControl>
                        <FormControl isRequired isInvalid={emailError} paddingBottom={4}>
                            <Input
                                type="email"
                                variant="flushed"
                                borderBottomColor={"#526D82"}
                                placeholder="Email *"
                                value={email}
                                onChange={handleEmailChange}
                                _placeholder={{color: "inherit", fontWeight: "bold"}}
                            />
                            {emailError ? (
                                <FormErrorMessage>Email is required.</FormErrorMessage>
                            ) : (
                                <></>
                            )}
                        </FormControl>
                        <FormControl paddingBottom={4}>
                            <Input
                                type="text"
                                variant="flushed"
                                borderBottomColor={"#526D82"}
                                placeholder="Company"
                                value={companyName}
                                onChange={handleCompanyNameChange}
                                _placeholder={{color: "inherit", fontWeight: "bold"}}
                            />
                        </FormControl>
                        <FormControl isRequired isInvalid={messageError} paddingBottom={4}>
                            <Input
                                type="text"
                                variant="flushed"
                                borderBottomColor={"#526D82"}
                                placeholder="Message *"
                                value={message}
                                onChange={handleMessageChange}
                                _placeholder={{color: "inherit", fontWeight: "bold"}}
                            />
                            {messageError ? (
                                <FormErrorMessage>Message is required.</FormErrorMessage>
                            ) : (
                                <></>
                            )}
                        </FormControl>
                        {formError ? (
                            <Text color="red" marginBottom={3}>
                                Errors have been detected in the form. Please take a moment to correct them before
                                proceeding.
                            </Text>
                        ) : (
                            <></>
                        )}
                        {formSubmissionError ? (
                            <Text color="red" marginBottom={3}>
                                {formSubmissionErrorMessage}
                            </Text>
                        ) : (
                            <></>
                        )}
                        <FormControl paddingBottom={4}>
                            <Button type="button" colorScheme="blackAlpha" onClick={handleFormSubmit}>
                                <Text>Submit enquiry</Text>
                                <FontAwesomeIcon icon={faArrowRight} style={{marginLeft: "5px"}}/>
                            </Button>
                        </FormControl>
                    </>
                )}

            </Box>
        </SimpleGrid>
    </>)
}
