## I. Introduction

How should the Internet be governed? How should we manage the information, media, software, politics, and communities of the Web?

Though early crypto-anarchists imagined the Internet as ungovernable, anarchy does not describe the Internet we know today. Corporations oversee the majority of our online activity, with most people publishing and connecting through centralized platforms like Facebook, Twitter, and Google.

How should the current system be described? Bruce Schneier uses the term "feudalism."

 > Power is consolidating around both vendor-managed user devices and large personal-data aggregators ... the rise of cloud computing means that we no longer have control of our data. ... And second, the rise of vendor-managed platforms means that we no longer have control of our computing devices.

 > Users pledge allegiance to more powerful companies who, in turn, promise to protect them from both sysadmin duties and security threats.

 > <cite>-- Bruce Schneier, ["Power in the Age of the Feudal Internet"](https://web.archive.org/web/20170618222637/http://en.collaboratory.de/w/Power_in_the_Age_of_the_Feudal_Internet "Power in the Age of the Feudal Internet")</cite>

Even the most casual technology-user can recognize the inescapable role that the Internet plays in modern life. Its services drive our lives, yet as users, we’re completely disconnected from their governance.

The disconnect is a motivating force for the *decentralization* movement, which includes [Bitcoin](https://bitcoin.org/en/ "Bitcoin"), [Ethereum](https://www.ethereum.org/ "Ethereum"), [Freenet](https://freenetproject.org/ "Freenet"), [Secure Scuttlebutt](https://www.scuttlebutt.nz/ "Secure Scuttlebutt"), [IPFS](https://www.ipfs.io/ "IPFS"), [Dat](https://www.datprotocol.com/ "Dat"), [Blockstack](https://blockstack.org/ "Blockstack"), and the [Beaker Browser](https://beakerbrowser.com) among others. Their motivations vary from the assertion of personal liberties to economic empowerment, but they all aim to somehow distribute political authority within a technical system.

Authority defines a network’s behavior and the powers of its participants. To change the distribution of authority, we should study how authority works. We should ask: When is authority within a computer network appropriate? How should it be assigned? Once assigned, how can it be constrained?

---

<img src="/images/centralization-graphs.png">

---

## II. The philosophy of authority

Why should we study political philosophy in the context of computing networks? What is the benefit to us as engineers and designers?

### Beyond the overthrow of kings

<img class="right" src="/images/putneydebates.jpg">

In the 1647 [Putney Debates](https://en.wikipedia.org/wiki/Putney_Debates), the soldiers who helped win the English Civil War wanted suffrage, but the aristocratic commanders feared the loss of private property. The commanders argued that democracy and property were incompatible: the poor could not be trusted with power when they could use it to redistribute wealth. England therefore returned to monarchy.

In 1689, John Locke developed his philosophy of government in his *[Two Treatises on Government](https://en.wikipedia.org/wiki/Two_Treatises_of_Government)*. He argued that a government’s role is to protect those essential rights which would naturally exist without society, an implicit agreement that justified the very existence of government: [the Social Contract](https://en.wikipedia.org/wiki/Social_contract).

Essential rights are a premise for rules which cannot be easily removed, even within a democracy. This often takes the form of a constitution, which requires a high degree of consensus to amend. With essential rights, rules like private property and free speech can be protected through a high degree of requisite consensus. Thus, democracy and private property are made compatible.

<div class="contained-img" style="background-image: url(/images/john-locke.jpg)"></div>

John Locke's *Treatises* were considered instrumental to the formation of Western democracies, along with the writings of [Montesquieu](https://en.wikipedia.org/wiki/Montesquieu) and [Jean-Jacques Rousseau](https://en.wikipedia.org/wiki/Jean-Jacques_Rousseau).

Had Locke's Two Treatises on Government existed prior to 1647, is it possible that the Putney soldiers would have successfully argued for their democracy? Likewise, is it possible that we have lost better forms of government by lacking the ideas to articulate them?

### Applying civics to technology

Critics of the decentralization movement often note that the Web is already decentralized, as anybody can create a server without asking permission from an authority. Why then does it need to be *re*-decentralized?

This confusion stems from the use of the overly-general application of the word "centralized." While the ability to host is not consolidated on the Web, the functions of Web applications (identity, networking, configuration, data storage) are often consolidated within the hosts. As a result, it might not always be accurate to say that the Web is centralized, but rather that the application functions are.

<img src="/images/separation-of-powers.jpg" class="right circle autosize">

To resolve this confusion, we can try to borrow concepts from civics. We might describe the consolidation of powers into applications as the absense of a "separation of powers" on the Web. Large hosts such as Facebook are placed in charge of all tasks related to their application, and have no limit on which powers they may acquire.

Confusions which arise from overly-broad terms suggest there's a lack of clarity in the thought or communication within the decentralization community. Participants are less likely to understand the goals of the community if the language or concepts are imprecise. This can easily lead to disagreements about the best models of authority and network design.

Bitcoin is now the victim of an emergent political standards process with conflicting goals. (See: ["The invisible politics of Bitcoin"](https://pdfs.semanticscholar.org/5761/af4eff318e876f2990aa53469352826214a0.pdf "The invisible politics of Bitcoin: governance crisis of a decentralised infrastructure").) Protocol changes are led by a core team then put to a vote by the miners, effectively forming a legislative body. This mechanism of voting, the miner "signal," was not originally intended to act as a vote, but has developed into that practice as interests diverged ([source](https://medium.com/@elombrozo/forks-signaling-and-activation-d60b6abda49a "Forks, Signaling, and Activation")). The fact that voting-power in this legislature is purchased and that nearly half of the votes are controlled by four entities ([source](https://www.technologyreview.com/s/610018/bitcoin-and-ethereum-have-a-hidden-power-structure-and-its-just-been-revealed/ "Bitcoin and Ethereum have a hidden power structure, and it’s just been revealed")) should be cause for alarm. Practically speaking, the legislative design of Bitcoin is plutocratic (rule by the wealthiest participants) as mining power is a reflection of invested capital. Some people may favor this design because they feel the miners have the most investment in the protocol’s future. Others may feel the plutocracy is itself a centralization which fails to represent the majority of transactors. Either way, this is a political discussion which should be made explicit, and will lead community-members to feel disenfranchised if they disagree about the power structure.

<img src="/images/eth.png" class="noborder autosize" style="max-width: 100%; margin: 30px auto 40px">

Ethereum angered many of its community members when its leaders reverted the state of the ledger to counteract the [DAO hack](https://en.wikipedia.org/wiki/Decentralized_autonomous_organization). Were they wrong to have done so? This question challenges the basic understanding of the technology. If the goal is to have zero authority in the network, then yes they were wrong, as the rollback was a clear use of authority which existed outside of the protocol code. However if the goal is to have *constrained* authority which relies on a high degree of political consensus to make changes to the ledger, then what they did was responsible governance.

These blockchain controversies suggest that we might have an incomplete view of governance and authority. Bitcoin's standards process highlights an inescapable need to manage changes to the protocol's code. Because the protocol can not be permanently fixed, decisions must be made by the community on how it grows. Meanwhile, Ethereum's rollback might be written off as a rare occassion, but it's impossible to guarantee that rollbacks will never reach political consensus again. The mental model for Ethereum must be modified if just to account for the *possibility* of such rollbacks.

Is it accurate (or even feasible) to view decentralization as the elimination of authority? If so, then we don't need to discuss the civics of computing networks, because there is no sophistication to it! If, however, decentralization can only seek to maximize the distribution of authority, then we should be looking for a more sophisticated model of governance which categorizes matters such as protocol development, legislative processes, and the nature of rollbacks in effective governance.

---

<img src="/images/proposed-tag.png" class="center autosize" style="max-width: none">

---

## III. Information Civics

Computing networks are social and political systems. We should attempt to answer how the technical design of a network will influence the internal politics.

The necessity of a political system is derived from the existence of authority. Every computing network has an authority structure which unfolds from the assignment of capabilities and from the management of shared state. Devices must be given addresses; data must have references; permissions must be assigned; content must be shared and mutated. Therefore, the network must assign authority over information. That authority may be given to individual participants, or to subsets of the network, or to the network as a whole. However, the existence of that authority can not be avoided. The assignment of authority is managed by political systems. Thus, inherent in the design of a network is a political system.


This reality has become no more apparent than in the Web, where Facebook and Google dictate the majority’s experience. However, the political system can also be seen in Bitcoin, where protocol changes are dictated by vote of the miners, and in E-mail, where reputation dictates the participation of servers. Every network has a political system which underpins its functions.

<div class="contained-img" style="background-image: url(/images/king-george-iii.jpg); height: 200px"></div>

### The authority problem

Every network contains a model for assigning authority. This authority model is the core political system.

Centralized applications emerge in the "Thin Client / Thick Server" model of networking. Facebook, Google, Twitter, Instagram, Reddit, and Pinterest are thick server apps. The client/server model explicitly reduces the capabilities of the browser to providing a minimal UI to the server, while the server houses all of the core code, data, and networking.

The society of users in thick-server applications route their actions through the server. When they message each other, they are updating entries in the server's database. When they publish files, they are writing those files to the server's disks. The server has ultimate authority over those systems. Users can access the interfaces provided by the server to control them, but the server may override a user's choice at any time. All authority is borrowed from the server, and so the users possess no authority of their own. As a result we must describe these services as authoritarian.

To say centralized applications are "authoritarian" is not to disparage them. It's a description of their political design. Users have no mechanisms to constrain or override the server's decisions. There are no "laws" which restrict the power of the server. All power in the application is concentrated into the server.

Users are not always aware of the authoritarianism because their services try to apply their authority in an even-handed fashion. The market for Internet and Web applications is still free and open. Users can still revolt at any time, and so the services do their best to keep their users happy.

But the unease about authoritarianism appears in spasms of controversy: dissatisfaction about a UI change, anger over moderation policies, or frustration about the design of algorithms or the placement of ads. It's in these moments that user's recognize their powerlessness over their applications. The outrage functionally lobbies the services for a change, but it's only effective for broad matters. Users have no power over the details in an authoritarian politic.

Decentralizers feel the anxiety over authoritarianism keenly. Perhaps they even feel it beyond what's reasonable. After all, to most users, Facebook isn't *that* bad, and the free market acts as a check on their authoritarian behavior.

However, the anxiety is not without merit. We're increasingly aware of the effects that algorithms have on our perception, and of the capacity of these Web services to manipulate their users. We're increasingly aware of the constant surveillance of these services upon their users. We're increasingly aware of the potential for political censorship. These services are powerful, and may someday become too powerful for users' comfort.

The basic act of political revolution is to "go to another service." It's in that moment that users become most cognizant of how little they owned before, as they can take nothing with them. When users adopt new services, they lose all data, all identity, all connections, all published content, and all familiarity. With the cost so high, users lack the incentive to revolt until there has been a great injustice. As they make the change, they do not find political liberation. Like the soldiers of the English Civil War in their Putney Debates, they find ourselves revolting to be ruled by another king.

<div class="contained-img" style="background-image: url(/images/july-revolution.jpg); height: 300px; background-position: top center;"></div>

### Anti-authoritarian networking

All computing networks have a political system which gains in importance as the userbase scales. This makes the design of the network a civic practice as much as it is technical. The developers must consider the political ramifications of their designs.

If canonical state is bound to a single device, then that device becomes an authority. Thick-server architectures make no account for the potential for a power imbalance. They place all capabilities and rights into the server and provide almost none to the client.

The solution is to leverage distributed networking models which shares authority across the network. Rather than placing all capabilities and rights in a host server, we share those capabilities across many devices.

There are many new mechanisms which can offset the server-based authority models. Cryptographic addressing, as in p2p filesharing networks, disconnects authority from individual devices and operators and establishes a form of property rights. Blockchains constrain operators to follow the agreed-upon published code (the "network constitution"). Webs of Trust enable users to assign their own authorities, build reputations, and share their knowledge socially.

These methods counter-act the problems of authority by providing alternatives to authoritarianism. Cryptographic property rights establish a means of sharing data without giving away ownership. Network constitutions place well-defined constraints on how authority may be applied. Webs of Trust produce open and free choice. These mechanisms don't preclude the use of servers or authorities, but they do reduce their power.

<div class="contained-img" style="background-image: url(/images/committee-of-five-presenting-the-declaration-of-independence-to-congress.jpg); height: 200px;"></div>

### Standards processes

The value of distributed networking is not only that it constrains authority. Distributed applications are designed to transact between peers, and the peers must agree upon the terms of each transaction. Therefore distributed applications can only do what their protocols support.

Protocols are inherently slow to change. They require each user to adopt the protocol's updates. This deployment process creates the opportunity for political process to take place. Users may contest an update or refuse adoption.

Used correctly, the inefficiency of protocol development can be a feature, not a bug. Protocols require a high degree of consensus among stakeholders to change. Any properties which are encoded into the protocol are therefore protected by the inefficiency of deployment. If a change would strip away a property which too many users want, they can refuse the change. This need for consensus creates the opportunity to establish Architectural Rights (below).

Frequently the development of standards is managed by standards bodies. Wire protocols, programming languages, and data formats will frequently establish groups comprised of industry stakeholders. For example: HTTP is governed by the [IESG](https://en.wikipedia.org/wiki/Internet_Engineering_Steering_Group "IESG"); the Web platform is governed by the [W3C](https://www.w3.org/ "W3C") and [WHATWG](https://whatwg.org/ "WhatWG"); BitTorrent is governed by the [BEP community](http://bittorrent.org/beps/bep_0001.html "BEP 0001").

Bitcoin provides an interesting case-study for its standards process. To make a change, a Bitcoin Improvement Proposal (BIP) is published, debated, and approved or withdrawn. (See: [Bitcoin Improvement Proposals](https://github.com/bitcoin/bips/blob/master/README.mediawiki "Bitcoin Improvement Proposals (BIP)")). If the proposal requires a change in the consensus rules, the miners are asked to signal their support. If a minimum of support is found, the change is deployed ([source](https://medium.com/@elombrozo/forks-signaling-and-activation-d60b6abda49a "Forks, Signaling, and Activation")). Over time, issues of block size and new features (eg [SegWit](https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki "BIP 141 Segregated Witness")) have become highly politicized, and in some cases led to forks such as [Bitcoin Cash](https://www.bitcoincash.org/ "Bitcoin Cash"). This may be a case of a beneficial emergent democracy, as miners have been able to voice their interests. However, if the system is too intransigent, it may fail to progress as needed.

Federated and peer-to-peer applications do not have decentralized consensus, but they still face challenges with interoperation and data-model constraints. Two examples of subtle challenges they face are "fatal ambiguity" and "the character-count conundrum."

*Fatal ambiguity* is what happens when two applications share a partial understanding of a schema. For instance, two social media apps may share a "status-update" schema which has the `text` and `createdAt` fields. Suppose that app A adds a new `audience` field which dictates that the status-update should only be visible to users listed in the field. App B will not understand the new `audience` field and ignore it, leading it to show the status-updates to the wrong users. This is "fatal ambiguity" created by a partial understanding. App A needs a way to communicate the importance of its new field to app B, or else expectations will be broken.

*The character-count conundrum* has to do with agreement on data-constraints. Again regarding our social media example, app A may set a limit of 140 characters on the `text` field, and app B may set a limit of 280 characters. Neither has the authority over the other to enforce this constraint. Messages from app B will therefore be truncated for users of app A. Agreeing on constraints like this can be very difficult as users tend to be opinionated about constraints on how they can behave.

There is no simple solution to these kinds of problems. Beyond the technical challenges of enforcement, there are the political challenges of agreeing on them. A poorly-managed political solution will lead users to feel victimized by the process and the development will stagnate (or the network will split). Therefore it's incumbent on the community to design a process that shares power without succumbing to dysfunction. 

---

<img src="/images/gnu.png" class="noborder center">

---

## IV. Architectural Rights

When we examine a large-scale social computing network, we need to discover how power is assigned within the network. Who is given authority to do what, and under which circumstances? This kind of information will help us understand the dynamics of the network. As authority may be used for personal, political, and commercial advantage, we need to think carefully about its assignment.

One of the most useful tools for analyzing a network is the "architectural right." This is, broadly speaking, any capability which is built into the network by its protocols and standards.

A right will dictate what a user is able to do. It will vary for different roles and configurations. We consider it a "right" because it is embedded into the protocols, and is therefore difficult to modify or take away. We call it an "architectural" right because it emerges from the design of the network. By viewing the architectural rights in aggregate, we can get a clear sense of how a network operates.

The concept of a "right" is politically-charged. We establish rights because we want to protect liberties and to establish the inviolable rules of a society. This is no less necessary in social computing networks. 

Architectural rights emerge naturally. They do not need to be formally designed to exist in a network. However, this is a cause to consider them explicitly, not an excuse to ignore them. If rights are not made explicit, they will emerge by accident, and may be assigned unfairly.

### Analysis: The Web 2.0

Architectural rights arise from the construction of a network, and are a reflection of the capabilities of each participant. Therefore to analyze the Web, we will ask, what are the kinds of participants, and what are their capabilities?

With HTTPS as the driving protocol, there are two kinds of participants on the Web: the server, and the client. Servers are able to host content and provide API services, while clients are able to connect to servers and consume those services. As the clients browse to servers, they receive and use the application software as given by the servers.

The way we describe the resulting rights is somewhat subjective and can be equivocated, but I will assert them as follows:

<table>
  <thead>
    <td>Right to...</td>
    <td>Held by</td>
    <td>Description</td>
  </thead>
  <tbody>
    <tr>
      <td>Identity</td>
      <td>Servers</td>
      <td>Can have identifiers</td>
    </tr>
    <tr>
      <td>Publish</td>
      <td>Servers</td>
      <td>Can publish content (hosting)</td>
    </tr>
    <tr>
      <td>Permission</td>
      <td>Servers</td>
      <td>Can control who accesses content or services</td>
    </tr>
    <tr>
      <td>Moderate</td>
      <td>Servers</td>
      <td>Can modify or remove content which users create</td>
    </tr>
    <tr>
      <td>Configure</td>
      <td>Servers</td>
      <td>Can choose software, settings, and infrastructure</td>
    </tr>
  </tbody>
</table>
<table>
  <thead>
    <td>Right to...</td>
    <td>Held by</td>
    <td>Description</td>
  </thead>
  <tbody>
    <tr>
      <td>Browse</td>
      <td>Clients</td>
      <td>Can download content</td>
    </tr>
    <tr>
      <td>Modify</td>
      <td>Clients</td>
      <td>Can modify downloaded content</td>
    </tr>
  </tbody>
</table>

It should be obvious that there's an imbalance in these rights. Servers control the software and data layer, and leave clients with a limited right to choose between the servers and to filter or modify the data hosted by servers (as in the case of ad blockers).

The imbalance of this binary citizenship is made more pronounced by two factors: the difficulty of acting as a server, and the large scope of server rights.

Acting as a server requires a minimum level of resources and expertise which most users lack. Due to limitations in IPv4 address-assignment, processing power, and ISP legal contracts, most users are not able to turn their computers into servers at all. The availability of cloud hosting has offset this problem, but at higher cost than most users care to adopt.

The large scope of server rights has led servers to provide the overwhelming majority of functions through their service. These functions include UI, identity, user messaging, publishing, moderation, discovery, search, data storage, data backup, and any specialized functions (eg language translation). Not only are these functions expected from a service, their value is wholly incumbent on the number of existing users because there is no standard for applications to integrate with each other.

All of these factors create a high barrier to users acting as servers on the Web. Because the majority of architectural rights on the Web are vested in servers, the result is a power imbalance. Only servers may publish, moderate, configure, or self-identify, and, because of the cost of those obligations, only wealthy companies can run servers which provide the capabilities expected of Internet applications.

To counter this, we should seek to unify the rights into one user-type when possible.

---

<img src="/images/pubkey.gif" class="noborder">

---

## V. Cryptographic property rights

The Web 2.0 uses hosts to identify data: the URL for any page or asset is tied to the IP address of its host. This created a strong binding between the Web's content and its hosting infrastructure.

<img class="right noborder" src="/images/p2p.png">

In peer-to-peer (p2p) file networks, data is addressed using cryptographic URLs. Users look up hosts at the time of access using these cryptographic URLs. This enables content to move between hosts without changing identity; the host is not attached to the URL.

This "un-binding" of hosting from URLs has large implications for publishing data. While users have a hard time running Web hosts, they have no trouble generating cryptographic URLs. Users can author content on their machines, allocate the cryptographic URLs, and then transfer hosting-duties to more appropriate infrastructure. This provides the same level of freedom that self-hosting has, but without the costs of administration.

How does this idea relate to "property rights?"

In computing networks, we rely on cryptography to establish global truths. A cryptographic *hash,* for instance, produces an ID which uniquely identifies a file. Meanwhile, a cryptographic *keypair* produces an ID & signed dataset which can only be manipulated by the users which possess its secret key. Therefore, keypairs establish possession.

In the Web 2.0, we use keypairs and certificates to establish possession of host URLs. This makes the host URL the property of the server which has the secret key. All resources which may be found at the host URL is under the authority of that possessor. For instance, twitter.com/bob is under the authority of the server that owns twitter.com.

The Web 2.0 has no mechanism to establish possession of data independently of a host; it can only treat hostnames as a possession. As a result, users have no way to assert data-ownership. Instead, they borrow URLs from hosts, and rely on the hosts to maintain their claim of ownership. This leaves users extremely dependent on their hosts in order to participate on the Web.

Peer-to-peer networking solves this by creating cryptographic URLs using keypairs. As a result, users are able to lay direct claim to their data. Users share their keypair IDs to publish the data, and then manipulate their dataset by signing it with the secret key.

"Property" conveys specific meanings: it's difficult to take away, and difficult to modify without the consent of the owner. In the Web 2.0, these meanings are upheld by the protest of users but can be revoked by a host. With cryptographic property rights, these meanings are inalienable.

Cryptographic property forms the basis for the architectural rights to publishing, identity, permissioning, and configuration.

 - **Publishing**: Any user can publish a site, app, or dataset by allocating a cryptographic URL and sharing it.
 - **Identity**: A cryptographic URL is not attached to any service, and so users' identities are sovereign.
 - **Permissioning**: Peer-to-peer networks can support user-to-user transfer, access controls, and end-to-end encryption, therefore enabling users to exclude third-party services from the content.
 - **Configuration**: As control of the signing keys and data live on the user devices, users can freely move their data between applications.

Property rights also have important effects on constraining authority, for instance in the case of moderation. While a moderator is able to remove user's content from a community, they will not be able to unpublish the content from the Web. The content will remain accessible at its independent URL. Likewise, the moderator may be able to remove a user from the community, but they can not remove the user's identity.

On the server-driven Web, moderators are able to unpublish content and user identities, leading moderative actions to be more damaging than they need to be. Moderation should protect communities without infringing on user's basic rights.

---

<img src="/images/blockchain.png" class="noborder">

---

## VI. Network constitutionalism

There are times when network authorities can't be avoided. This may be because specific constraints on the data-model must be enforced, or because users need a consistent location to find and share data. However the risk of using an authority is that they might manipulate the dataset in ways the users would not want. To offset this risk, we can use constitutional network protocols.

A constitutional networking protocol is a protocol which automatically enforces a published code. Historically that code has been called the "protocol" (as in Bitcoin) or the "smart contract" (as in Ethereum). Here we will call that code a "constitution." We call it a constitution because it provides a set of rules for the operation of an authority. By auditing the authority's ledger, users can ensure that the constitution is being followed, and can prove when deviations occur.

Constitutionalism has the effect of transfering authority from the operator to the code. The authority's dataset may only be changed according to the rules written into the constitution. By tailing the ledger and replaying the changes, users can detect when the rules have been broken (which would result in a state mismatch). As a result, the users can focus on the design of the constitutional code to guarantee the network's activity. Users are less interested in who is running the network than how it is designed.

<div class="contained-img" style="background-image: url(/images/constitution.jpg); background-position: top center; height: 200px"></div>

It's not necessary for a constitution to be used to create anti-authoritarian networks. All protocols and standards have a role in guaranteeing behaviors and rights and reducing the authority of individual entities. However, the unique power of the constitution is its ability to constrain the behavior of an appointed authority. When an authority must be used, a constitution will place a check on their power.

There is some debate over whether decentralized consensus is required to gain the value of a constitution. Let's examine the pieces individually and weigh the pros and cons.

#### Secure ledgers

Secure ledgers are the core of constitutional network protocols. They are logs which contain the dataset which the authority manages. They are known as being "append-only," meaning that the authority can only add new data to the end of the log.

Secure ledgers provide auditability to the dataset. The goal is to monitor the data and ensure that the operators never lie about its state or break the rules of its constitution. Any information added to the ledger should be very difficult to change after it's published.

To accomplish this, secure ledgers use a cryptographic addressing scheme. The ledger's history is addressed using a hash-chain or merkle tree. As a result, the "value" of the history can be reduced to small hashes. By comparing history-hashes, users can ensure that they possess equivalent histories. If history-hashes are not equivalent when they should be, they know that the history has somehow been changed, therefore the "append-only" constraint has been broken.

A secure ledger makes it easy for recipients audit the ledger. Peers can compare their history-hashes with each other to ensure that only one history has been published by the operator. If they find their hashes differ, they know the operator has tried to modify the history, and they can often prove this discrepency to the network.

#### Hosted secure ledgers

A "hosted secure ledger" describes a secure ledger which is controlled by an individual operator (the host). The host publishes the code (the constitution) as well as the dataset using the p2p network.

Requests are made directly to the host. The requests, the signature of the requester, and the results of the request are logged to the secure ledger. The host handles requests by running the published constitution.

To audit the host, a user can tail the ledger and replay the requests against the constitution. If the result state ever differs from the published state, or if the ledger's history is modified, the user can prove the deviation to the network.

#### Decentralized consensus

Decentralized consensus is a method for multiple parties to modify the state of a dataset without trusting each other. In theory, it allows the network to work together without concern about who the operators are. Examples include Bitcoin and Ethereum.

Decentralized consensus builds upon the value of secure ledgers. While a hosted secure ledger may reduce the trust needed in the operator, it cannot fully remove that trust. The host must be trusted not to deny transactions, and if the host misbehaves then its service will stop. Decentralized consensus makes it hard to deny a transaction because any of the active operators may accept it. It also solves the question of misbehaving hosts by providing a number of other active operators who will continue to behave well. Therefore, decentralized consensus provides the strongest possible "constitutional" guarantee.

At time of writing, decentralized consensus has been held back by issues of performance and energy efficiency. If these problems can be solved, it may provide an ideal solution for operating global authorities on the Internet, as it will provide strong auditability and strict constitutional limitations on the authority.

---

<img src="/images/statue-of-liberty.png" style="width: auto; margin: 0 auto;">
<p style="text-align: center; font-size: 10px">credit: <a href="https://piq.codeus.net/u/FakinScoot">FakinScoot</a> <a href="https://creativecommons.org/licenses/by/3.0/">cc by 3.0</a></p>

---

## VII. Conclusion

In this essay, I have attempted to discuss the civic philosophy which is inherent in the decentralization movement, and explored some ideas which can be used to distribute authority more equally throughout social computing networks. I have not attempted to share perfect solutions, but to offer some useful ideas for how we might think about civics online.

Civic systems are complex and unpredictable. They can start well and fall into disrepair. They require rigour. We should be careful not to lull ourselves into simple extremes of perspective. Though the intentions are often good, it's common for political ideologies to value purity over sophisitication.

There is no ideal of objectivity, nor any final machine which will order the affairs of humanity. Markets are as deadly device for governance as pure democracy is. Not all interactions should be tokenized or monetized. Not all decisions should be delegated. Authority is not inherently evil; only the selfish application of authority, or the lethargy of thought which enables it.

<footer>
  <p>
    I hope this essay has shed light on the motivations of many modern decentralizers, and shared some useful ideas for future network designers.
  </p>
  <p>
    You can find more of my writing and related work at
    <a href="https://pfrazee.hashbase.io">pfrazee.hashbase.io</a> and my Twitter account
    <a href="https://twitter.com/pfrazee">@pfrazee</a>.
  </p>
  <p>
    Thanks to <a href="https://twitter.com/taravancil">Tara Vancil</a>, <a href="https://twitter.com/mafintosh">Mathias Buus</a>, <a href="https://twitter.com/dominictarr">Dominic Tarr</a>, and <a href="https://twitter.com/whimful">Mix Irving</a>, among many others for their thoughts and feedback.
  </p>
</footer>