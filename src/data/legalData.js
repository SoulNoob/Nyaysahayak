export const OFFICIAL_LEGAL_DATA = [
    // --- CONSTITUTION OF INDIA ---
    {
        id: "const_14",
        source: "Constitution of India",
        section: "Article 14",
        title: "Equality before law",
        text: "The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.",
        keywords: ["equality", "discrimination", "rights", "fairness", "bias"],
        remedy: "File a Writ Petition under Article 32 (Supreme Court) or Article 226 (High Court).",
        steps: ["Document the discriminatory act.", "Consult a constitutional lawyer.", "File Writ of Mandamus or Certiorari."],
        evidence: ["Official orders showing discrimination.", "Written correspondence proving bias.", "Comparative data of unequal treatment."]
    },
    {
        id: "const_15",
        source: "Constitution of India",
        section: "Article 15",
        title: "Prohibition of discrimination",
        text: "The State shall not discriminate against any citizen on grounds only of religion, race, caste, sex, place of birth or any of them.",
        keywords: ["discrimination", "caste", "religion", "gender", "public places"],
        remedy: "Writ Petition for enforcement of Fundamental Rights.",
        steps: ["Gather proof of denial of access/service.", "File complaint with relevant commission (SC/ST/Women)."],
        evidence: ["Video evidence of denial.", "Witness statements.", "Written refusal of service."]
    },
    {
        id: "const_19",
        source: "Constitution of India",
        section: "Article 19",
        title: "Protection of certain rights regarding freedom of speech, etc.",
        text: "All citizens shall have the right to freedom of speech and expression; to assemble peaceably and without arms; to form associations or unions...",
        keywords: ["speech", "expression", "protest", "assembly", "association"],
        remedy: "Writ Petition under Art 32 or 226.",
        steps: ["Gather evidence of restriction.", "File Writ Petition."],
        evidence: ["Recording of restriction.", "Police orders (Sec 144).", "Refusal letters."]
    },
    {
        id: "const_21",
        source: "Constitution of India",
        section: "Article 21",
        title: "Protection of life and personal liberty",
        text: "No person shall be deprived of his life or personal liberty except according to procedure established by law. (Includes Right to Privacy, Health, Dignity)",
        keywords: ["life", "liberty", "privacy", "health", "arrest", "torture"],
        remedy: "Habeas Corpus Writ or Writ of Mandamus.",
        steps: ["File Habeas Corpus if detained.", "File Writ for privacy/health violations."],
        evidence: ["Arrest memo (or lack of).", "Medical records.", "CCTV footage."]
    },
    {
        id: "const_23",
        source: "Constitution of India",
        section: "Article 23",
        title: "Prohibition of traffic in human beings and forced labour",
        text: "Traffic in human beings and begar and other similar forms of forced labour are prohibited.",
        keywords: ["trafficking", "forced labour", "slavery", "exploitation", "bondage"],
        remedy: "Writ Petition; Criminal complaint under specific laws.",
        steps: ["Report to Police/NGO.", "File Writ for rescue."],
        evidence: ["Witness testimony.", "Photos of working conditions.", "Rescue reports."]
    },
    {
        id: "const_32",
        source: "Constitution of India",
        section: "Article 32",
        title: "Remedies for enforcement of rights",
        text: "The right to move the Supreme Court by appropriate proceedings for the enforcement of the rights conferred by this Part is guaranteed.",
        keywords: ["remedy", "writ", "supreme court", "justice"],
        remedy: "Direct approach to Supreme Court.",
        steps: ["Draft Writ Petition.", "File with SC Registry."],
        evidence: ["Proof of violation of Fundamental Right.", "Rejection by lower authorities."]
    },

    // --- BHARATIYA NYAYA SANHITA (BNS) 2023 ---
    {
        id: "bns_103",
        source: "Bharatiya Nyaya Sanhita (BNS) 2023",
        section: "Section 103",
        title: "Punishment for Murder",
        text: "Whoever commits murder shall be punished with death or imprisonment for life, and shall also be liable to fine.",
        keywords: ["murder", "kill", "homicide", "death"],
        remedy: "Criminal prosecution by State.",
        steps: ["File FIR immediately.", "Preserve crime scene.", "Cooperate with investigation."],
        evidence: ["Forensic reports.", "Weapon.", "CCTV/Mobile data.", "Eyewitnesses."]
    },
    {
        id: "bns_64",
        source: "Bharatiya Nyaya Sanhita (BNS) 2023",
        section: "Section 64",
        title: "Punishment for Rape",
        text: "A man who commits rape shall be punished with rigorous imprisonment of not less than ten years, which may extend to imprisonment for life, and shall also be liable to fine.",
        keywords: ["rape", "sexual assault", "woman", "consent"],
        remedy: "Rigorous Imprisonment >= 10 years.",
        steps: ["File FIR (Zero FIR possible).", "Medical Exam (within 24hrs).", "Statement to Magistrate (Sec 183 BNSS)."],
        evidence: ["Medical Report (MLC).", "Clothes/DNA evidence.", "Electronic communication."]
    },
    {
        id: "bns_303",
        source: "Bharatiya Nyaya Sanhita (BNS) 2023",
        section: "Section 303",
        title: "Theft",
        text: "Whoever, intending to take dishonestly any movable property out of the possession of any person without that person's consent, moves that property...",
        keywords: ["theft", "steal", "robbery", "property"],
        remedy: "Imprisonment up to 3 years/fine.",
        steps: ["File FIR.", "Provide list of items.", "Check CCTV."],
        evidence: ["Purchase bills.", "CCTV footage.", "Photos of scene."]
    },
    {
        id: "bns_308",
        source: "Bharatiya Nyaya Sanhita (BNS) 2023",
        section: "Section 308",
        title: "Extortion",
        text: "Whoever intentionally puts any person in fear of any injury to that person, or to any other, and thereby dishonestly induces the person so put in fear to deliver any property...",
        keywords: ["extortion", "blackmail", "threat", "money"],
        remedy: "Imprisonment up to 2 years/fine.",
        steps: ["Record the threats.", "File FIR.", "Do not pay."],
        evidence: ["Call recordings.", "Threatening messages/emails.", "Bank records if paid."]
    },
    {
        id: "bns_356",
        source: "Bharatiya Nyaya Sanhita (BNS) 2023",
        section: "Section 356",
        title: "Defamation",
        text: "Whoever, by words either spoken or intended to be read, or by signs or by visible representations, makes or publishes any imputation concerning any person intending to harm...",
        keywords: ["defamation", "slander", "libel", "reputation", "insult"],
        remedy: "Simple Imprisonment up to 2 years/fine.",
        steps: ["Send Legal Notice.", "File Criminal Complaint (Magistrate).", "File Civil Suit for Damages."],
        evidence: ["Screenshots of post.", "Newspaper clipping.", "Witness testimony of harm to reputation."]
    },
    {
        id: "bns_351",
        source: "Bharatiya Nyaya Sanhita (BNS) 2023",
        section: "Section 351",
        title: "Criminal Intimidation",
        text: "Whoever threatens another with any injury to his person, reputation or property... with intent to cause alarm to that person...",
        keywords: ["intimidation", "threat", "fear", "alarm"],
        remedy: "Imprisonment up to 2 years/fine.",
        steps: ["File FIR/NC Complaint.", "Seek police protection if needed."],
        evidence: ["Recordings of threat.", "Witness statements.", "Written notes."]
    },
    {
        id: "bns_115",
        source: "Bharatiya Nyaya Sanhita (BNS) 2023",
        section: "Section 115",
        title: "Voluntarily causing hurt",
        text: "Whoever does any act with the intention of thereby causing hurt to any person, or with the knowledge that he is likely thereby to cause hurt to any person...",
        keywords: ["hurt", "injury", "minor injury", "fight", "beating", "slap", "punch"],
        remedy: "Imprisonment up to 1 year, or fine up to Rs. 10,000, or both.",
        steps: ["Get medical aid (MLC).", "File FIR or NC (Non-Cognizable) Report.", "Collect witness details."],
        evidence: ["Medical Report (Injury Report).", "Photos of injuries.", "CCTV footage.", "Witness statements."]
    },
    {
        id: "bns_117",
        source: "Bharatiya Nyaya Sanhita (BNS) 2023",
        section: "Section 117",
        title: "Voluntarily causing grievous hurt",
        text: "Whoever voluntarily causes hurt, if the hurt which he intends to cause or knows himself to be likely to cause is grievous hurt...",
        keywords: ["grievous hurt", "serious injury", "fracture", "permanent damage", "attack"],
        remedy: "Imprisonment up to 7 years and fine.",
        steps: ["Immediate medical attention.", "File FIR (Cognizable Offense).", "Police investigation."],
        evidence: ["X-Ray/MRI Reports.", "Doctor's opinion on nature of injury.", "Weapon used."]
    },
    {
        id: "bns_126",
        source: "Bharatiya Nyaya Sanhita (BNS) 2023",
        section: "Section 126",
        title: "Wrongful restraint",
        text: "Whoever voluntarily obstructs any person so as to prevent that person from proceeding in any direction in which that person has a right to proceed...",
        keywords: ["restraint", "blocking", "stopping", "confinement", "road rage"],
        remedy: "Simple Imprisonment up to 1 month, or fine, or both.",
        steps: ["Call 112.", "Record the obstruction.", "File complaint."],
        evidence: ["Video recording.", "GPS logs.", "Witness testimony."]
    },
    {
        id: "bns_194",
        source: "Bharatiya Nyaya Sanhita (BNS) 2023",
        section: "Section 194",
        title: "Affray",
        text: "When two or more persons, by fighting in a public place, disturb the public peace, they are said to commit an affray.",
        keywords: ["affray", "public fight", "brawl", "disturbance", "street fight"],
        remedy: "Imprisonment up to 1 month, or fine, or both.",
        steps: ["Disperse immediately.", "Report to police if attacked."],
        evidence: ["CCTV footage.", "Public witness statements."]
    },

    // --- INFORMATION TECHNOLOGY ACT 2000 ---
    {
        id: "it_66",
        source: "IT Act 2000",
        section: "Section 66",
        title: "Computer Related Offences (Hacking)",
        text: "Dishonestly or fraudulently doing any act referred to in section 43 (damage, download, virus, denial of access).",
        keywords: ["hacking", "virus", "data theft", "unauthorized access"],
        remedy: "Imprisonment up to 3 years/fine up to 5 Lakhs.",
        steps: ["Disconnect device.", "Take logs.", "File Cyber Complaint."],
        evidence: ["Server logs.", "Screenshots.", "Forensic report."]
    },
    {
        id: "it_66c",
        source: "IT Act 2000",
        section: "Section 66C",
        title: "Identity Theft",
        text: "Fraudulently or dishonestly making use of the electronic signature, password or any other unique identification feature of any other person.",
        keywords: ["identity theft", "impersonation", "fake profile", "password"],
        remedy: "Imprisonment up to 3 years/fine up to 1 Lakh.",
        steps: ["Report profile.", "File complaint.", "Alert bank."],
        evidence: ["URL of fake profile.", "Screenshots.", "Original ID proof."]
    },
    {
        id: "it_66e",
        source: "IT Act 2000",
        section: "Section 66E",
        title: "Violation of Privacy",
        text: "Intentionally or knowingly capturing, publishing or transmitting the image of a private area of any person without his or her consent, violating their privacy.",
        keywords: ["privacy", "voyeurism", "hidden camera", "mms", "nude"],
        remedy: "Imprisonment up to 3 years/fine up to 2 Lakhs.",
        steps: ["Report to platform.", "File FIR.", "Seize device."],
        evidence: ["The viral image/video.", "Device used.", "Screenshots of distribution."]
    },
    {
        id: "it_66f",
        source: "IT Act 2000",
        section: "Section 66F",
        title: "Cyber Terrorism",
        text: "Acts done with intent to threaten the unity, integrity, security or sovereignty of India or to strike terror in the people... by denying access to authorized personnel or introducing contaminant.",
        keywords: ["terrorism", "national security", "cyber war", "critical infrastructure"],
        remedy: "Imprisonment for life.",
        steps: ["Report to NIA/Cyber Cell immediately.", "Isolate systems."],
        evidence: ["Network logs.", "Attribution report.", "Impact assessment."]
    },
    {
        id: "it_67",
        source: "IT Act 2000",
        section: "Section 67",
        title: "Publishing Obscene Material",
        text: "Publishing or transmitting in electronic form any material which is lascivious or appeals to the prurient interest.",
        keywords: ["obscenity", "pornography", "adult content"],
        remedy: "Imprisonment up to 3 years (first conviction).",
        steps: ["Preserve URL.", "Report to platform.", "File FIR."],
        evidence: ["URL.", "Screenshots.", "Hash value of file."]
    },

    // --- SPECIAL ACTS ---

    // POCSO Act
    {
        id: "pocso_3",
        source: "POCSO Act 2012",
        section: "Section 3",
        title: "Penetrative Sexual Assault",
        text: "Penetrative sexual assault on a child (person under 18 years of age).",
        keywords: ["child abuse", "sexual assault", "pocso", "rape", "child victim"],
        remedy: "Imprisonment not less than 10 years, up to life.",
        steps: ["Report to Police/Special Juvenile Police Unit.", "Do not confront accused.", "Medical aid for child."],
        evidence: ["Medical Report.", "Child's statement (Sec 164 CrPC).", "Age proof of child."]
    },

    // NDPS Act
    {
        id: "ndps_20",
        source: "NDPS Act 1985",
        section: "Section 20",
        title: "Contravention in relation to cannabis plant and cannabis",
        text: "Punishment for cultivation, production, manufacture, possession, sale, purchase, transport, import inter-State, export inter-State or use of cannabis.",
        keywords: ["drugs", "ganja", "weed", "cannabis", "narcotics", "possession"],
        remedy: "Varies by quantity (Small/Commercial). Rigorous Imprisonment.",
        steps: ["Do not touch substance.", "Report to Police/NCB.", "Legal representation."],
        evidence: ["Seizure memo.", "FSL Report.", "Possession proof."]
    },

    // Negotiable Instruments Act
    {
        id: "ni_138",
        source: "Negotiable Instruments Act 1881",
        section: "Section 138",
        title: "Dishonour of Cheque (Cheque Bounce)",
        text: "Where any cheque drawn by a person on an account maintained by him... is returned by the bank unpaid... for insufficiency of funds...",
        keywords: ["cheque bounce", "payment", "bank", "debt", "finance"],
        remedy: "Imprisonment up to 2 years or fine (twice the amount).",
        steps: ["Issue Legal Notice within 30 days of return memo.", "File complaint in Court if not paid within 15 days of notice."],
        evidence: ["Original Cheque.", "Bank Return Memo.", "Copy of Legal Notice.", "Postal Receipt."]
    },

    // Domestic Violence Act
    {
        id: "dv_12",
        source: "PWDV Act 2005",
        section: "Section 12",
        title: "Application to Magistrate",
        text: "An aggrieved person or a Protection Officer or any other person on behalf of the aggrieved person may present an application to the Magistrate seeking one or more reliefs under this Act.",
        keywords: ["domestic violence", "abuse", "wife", "protection order", "maintenance"],
        remedy: "Protection Order, Residence Order, Monetary Relief.",
        steps: ["File DIR (Domestic Incident Report) with Protection Officer.", "File application before Magistrate."],
        evidence: ["Medical reports of injury.", "Police complaints (NC/FIR).", "Photos of abuse.", "Witness statements."]
    },

    // Prevention of Corruption Act
    {
        id: "pca_7",
        source: "Prevention of Corruption Act 1988",
        section: "Section 7",
        title: "Public servant taking gratification other than legal remuneration",
        text: "Whoever, being a public servant, accepts or obtains... any gratification whatever, other than legal remuneration, as a motive or reward for doing or forbearing to do any official act...",
        keywords: ["corruption", "bribe", "public servant", "gratification"],
        remedy: "Imprisonment 3 to 7 years and fine.",
        steps: ["Do not pay bribe.", "Record the demand (Audio/Video).", "Report to Anti-Corruption Bureau (ACB) or CBI."],
        evidence: ["Trap money (marked notes).", "Audio/Video recording.", "Call records.", "Witnesses."]
    },

    // --- BNS (NEGLIGENCE) ---
    {
        id: "bns_106",
        source: "Bharatiya Nyaya Sanhita (BNS) 2023",
        section: "Section 106",
        title: "Causing death by negligence",
        text: "Whoever causes the death of any person by doing any rash or negligent act not amounting to culpable homicide...",
        keywords: ["negligence", "accident", "rash driving", "medical negligence", "death", "road accident", "collision", "bike", "car"],
        remedy: "Imprisonment up to 5 years and fine. (Medical negligence: up to 2 years).",
        steps: ["File FIR.", "Seek medical help.", "Document the scene."],
        evidence: ["Accident report.", "Post-mortem report.", "CCTV footage.", "Witness statements."]
    },

    // --- MOTOR VEHICLES ACT ---
    {
        id: "mva_184",
        source: "Motor Vehicles Act 1988",
        section: "Section 184",
        title: "Dangerous Driving",
        text: "Driving at a speed or in a manner which is dangerous to the public, having regard to all the circumstances...",
        keywords: ["traffic", "dangerous driving", "speeding", "rash driving", "road safety", "accident", "collision", "bike", "car"],
        remedy: "Fine up to Rs. 5,000 and/or imprisonment up to 1 year.",
        steps: ["Stop the vehicle.", "Cooperate with traffic police.", "Pay challan or contest in court."],
        evidence: ["Speed gun reading.", "CCTV/Dashcam footage.", "Challan copy."]
    },

    // NDPS Act
    {
        id: "ndps_20",
        source: "NDPS Act 1985",
        section: "Section 20",
        title: "Contravention in relation to cannabis plant and cannabis",
        text: "Punishment for cultivation, production, manufacture, possession, sale, purchase, transport, import inter-State, export inter-State or use of cannabis.",
        keywords: ["drugs", "ganja", "weed", "cannabis", "narcotics", "possession"],
        remedy: "Varies by quantity (Small/Commercial). Rigorous Imprisonment.",
        steps: ["Do not touch substance.", "Report to Police/NCB.", "Legal representation."],
        evidence: ["Seizure memo.", "FSL Report.", "Possession proof."]
    },

    // Negotiable Instruments Act
    {
        id: "ni_138",
        source: "Negotiable Instruments Act 1881",
        section: "Section 138",
        title: "Dishonour of Cheque (Cheque Bounce)",
        text: "Where any cheque drawn by a person on an account maintained by him... is returned by the bank unpaid... for insufficiency of funds...",
        keywords: ["cheque bounce", "payment", "bank", "debt", "finance"],
        remedy: "Imprisonment up to 2 years or fine (twice the amount).",
        steps: ["Issue Legal Notice within 30 days of return memo.", "File complaint in Court if not paid within 15 days of notice."],
        evidence: ["Original Cheque.", "Bank Return Memo.", "Copy of Legal Notice.", "Postal Receipt."]
    },

    // Domestic Violence Act
    {
        id: "dv_12",
        source: "PWDV Act 2005",
        section: "Section 12",
        title: "Application to Magistrate",
        text: "An aggrieved person or a Protection Officer or any other person on behalf of the aggrieved person may present an application to the Magistrate seeking one or more reliefs under this Act.",
        keywords: ["domestic violence", "abuse", "wife", "protection order", "maintenance"],
        remedy: "Protection Order, Residence Order, Monetary Relief.",
        steps: ["File DIR (Domestic Incident Report) with Protection Officer.", "File application before Magistrate."],
        evidence: ["Medical reports of injury.", "Police complaints (NC/FIR).", "Photos of abuse.", "Witness statements."]
    },

    // Prevention of Corruption Act
    {
        id: "pca_7",
        source: "Prevention of Corruption Act 1988",
        section: "Section 7",
        title: "Public servant taking gratification other than legal remuneration",
        text: "Whoever, being a public servant, accepts or obtains... any gratification whatever, other than legal remuneration, as a motive or reward for doing or forbearing to do any official act...",
        keywords: ["corruption", "bribe", "public servant", "gratification"],
        remedy: "Imprisonment 3 to 7 years and fine.",
        steps: ["Do not pay bribe.", "Record the demand (Audio/Video).", "Report to Anti-Corruption Bureau (ACB) or CBI."],
        evidence: ["Trap money (marked notes).", "Audio/Video recording.", "Call records.", "Witnesses."]
    },

    // --- BNS (NEGLIGENCE) ---
    {
        id: "bns_106",
        source: "Bharatiya Nyaya Sanhita (BNS) 2023",
        section: "Section 106",
        title: "Causing death by negligence",
        text: "Whoever causes the death of any person by doing any rash or negligent act not amounting to culpable homicide...",
        keywords: ["negligence", "accident", "rash driving", "medical negligence", "death"],
        remedy: "Imprisonment up to 5 years and fine. (Medical negligence: up to 2 years).",
        steps: ["File FIR.", "Seek medical help.", "Document the scene."],
        evidence: ["Accident report.", "Post-mortem report.", "CCTV footage.", "Witness statements."]
    },

    // --- MOTOR VEHICLES ACT ---
    {
        id: "mva_184",
        source: "Motor Vehicles Act 1988",
        section: "Section 184",
        title: "Dangerous Driving",
        text: "Driving at a speed or in a manner which is dangerous to the public, having regard to all the circumstances...",
        keywords: ["traffic", "dangerous driving", "speeding", "rash driving", "road safety"],
        remedy: "Fine up to Rs. 5,000 and/or imprisonment up to 1 year.",
        steps: ["Stop the vehicle.", "Cooperate with traffic police.", "Pay challan or contest in court."],
        evidence: ["Speed gun reading.", "CCTV/Dashcam footage.", "Challan copy."]
    },
    {
        id: "mva_185",
        source: "Motor Vehicles Act 1988",
        section: "Section 185",
        title: "Driving by a drunken person or under the influence of drugs",
        text: "Whoever, while driving, has in his blood, alcohol exceeding 30 mg. per 100 ml. of blood...",
        keywords: ["drunk driving", "alcohol", "dui", "traffic violation"],
        remedy: "Fine up to Rs. 10,000 and/or imprisonment up to 6 months.",
        steps: ["Undergo breathalyzer test.", "Do not resist.", "Contact a lawyer if falsely accused."],
        evidence: ["Breathalyzer report.", "Blood test report.", "Police report."]
    },

    // --- CONSUMER PROTECTION ACT ---
    {
        id: "cpa_35",
        source: "Consumer Protection Act 2019",
        section: "Section 35",
        title: "Manner in which complaint shall be made",
        text: "A complaint, in relation to any goods sold or delivered or agreed to be sold or delivered or any service provided or agreed to be provided, may be filed with a District Commission...",
        keywords: ["consumer", "complaint", "defective product", "service deficiency", "refund"],
        remedy: "Refund, replacement, and compensation for damages.",
        steps: ["Send legal notice to seller.", "File complaint online (edaakhil.nic.in) or offline.", "Attend hearings."],
        evidence: ["Invoice/Bill.", "Warranty card.", "Photos of defect.", "Correspondence with seller."]
    },

    // --- PROPERTY LAWS ---
    {
        id: "tpa_54",
        source: "Transfer of Property Act 1882",
        section: "Section 54",
        title: "Sale defined",
        text: "Sale is a transfer of ownership in exchange for a price paid or promised or part-paid and part-promised.",
        keywords: ["property", "sale", "land", "house", "registry", "ownership"],
        remedy: "Specific Performance of Contract or Refund of Money.",
        steps: ["Execute Sale Deed.", "Register with Sub-Registrar.", "Pay Stamp Duty."],
        evidence: ["Sale Agreement.", "Payment proof.", "Sale Deed copy."]
    },
    {
        id: "tpa_105",
        source: "Transfer of Property Act 1882",
        section: "Section 105",
        title: "Lease defined",
        text: "A lease of immovable property is a transfer of a right to enjoy such property, made for a certain time, express or implied, or in perpetuity, in consideration of a price paid or promised...",
        keywords: ["lease", "rent", "tenant", "landlord", "eviction"],
        remedy: "Eviction Suit or Suit for Injunction.",
        steps: ["Send Eviction Notice.", "File Rent Control Petition or Civil Suit."],
        evidence: ["Rent Agreement.", "Rent receipts.", "Notice copy."]
    },
    {
        id: "rera_31",
        source: "Real Estate (Regulation and Development) Act 2016",
        section: "Section 31",
        title: "Filing of complaints",
        text: "Any aggrieved person may file a complaint with the Authority or the adjudicating officer, as the case may be, for any violation or contravention of the provisions of this Act...",
        keywords: ["rera", "builder", "flat", "possession", "delay", "real estate"],
        remedy: "Refund with interest, Compensation, or Possession.",
        steps: ["File complaint on RERA website.", "Attend hearings."],
        evidence: ["Builder-Buyer Agreement.", "Payment receipts.", "Correspondence regarding delay."]
    },

    // --- MILITARY LAWS ---
    {
        id: "army_34",
        source: "Army Act 1950",
        section: "Section 34",
        title: "Offences in relation to the enemy and punishable with death",
        text: "Any person subject to this Act who commits any of the following offences, that is to say, shamefully abandons or delivers up any garrison, fortress, post...",
        keywords: ["army", "military", "enemy", "treason", "cowardice"],
        remedy: "Court Martial (Death or Life Imprisonment).",
        steps: ["Court of Inquiry.", "Summary of Evidence.", "Court Martial proceedings."],
        evidence: ["Witness testimony.", "Service records.", "Operational logs."]
    },
    {
        id: "army_38",
        source: "Army Act 1950",
        section: "Section 38",
        title: "Desertion and aiding desertion",
        text: "Any person subject to this Act who deserts or attempts to desert the service shall, on conviction by court-martial...",
        keywords: ["desertion", "awol", "absent without leave", "army"],
        remedy: "Imprisonment up to 7 years (or death if on active service).",
        steps: ["Report AWOL.", "Apprehend deserter.", "Court Martial."],
        evidence: ["Roll call reports.", "Apprehension report.", "Service book."]
    },
    {
        id: "bns_137",
        source: "Bharatiya Nyaya Sanhita (BNS) 2023",
        section: "Section 137",
        title: "Kidnapping",
        text: "Whoever takes or entices any minor under sixteen years of age if a male, or under eighteen years of age if a female... out of the keeping of the lawful guardian...",
        keywords: ["kidnapping", "missing child", "lost child", "abduction", "missing person", "lost", "found"],
        remedy: "Imprisonment up to 7 years and fine.",
        steps: ["Call 112 immediately.", "File Missing Person Report (FIR).", "Upload details on TrackChild portal.", "Check nearby CCTV."],
        evidence: ["Recent photo of child.", "Last seen location.", "CCTV footage.", "Witness statements."]
    }
];
