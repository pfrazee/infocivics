## Information Civics

 > Power is consolidating around both vendor-managed user devices and large personal-data aggregators ... the rise of cloud computing means that we no longer have control of our data. ... And second, the rise of vendor-managed platforms means that we no longer have control of our computing devices.

 > Users pledge allegiance to more powerful companies who, in turn, promise to protect them from both sysadmin duties and security threats.

 > <cite>-- Bruce Schneier, ["Power in the Age of the Feudal Internet"](https://web.archive.org/web/20170618222637/http://en.collaboratory.de/w/Power_in_the_Age_of_the_Feudal_Internet "Power in the Age of the Feudal Internet")</cite>

In the 1647 [Putney Debates](https://en.wikipedia.org/wiki/Putney_Debates), the soldiers who helped win the English Civil War wanted suffrage, but the aristocratic commanders feared the loss of private property. The commanders argued that democracy and property were incompatible: the poor could not be trusted with power when they could use it to redistribute wealth. England therefore returned to monarchy.

Technological "decentralizers" seem a lot like those soldiers to me. They debate the design of new social systems with a limited vocabulary and their designs inherit those limits. Rhetorically they start with libertarian or anarchist premises and then fail to probe into the second-order effects because, of course, techno magic is involved so of course the fantastic premises must hold systemically. (I'm talking about the kind of mess you see in the comments sections of Hacker News.) Perhaps that's just how propaganda works -- you don't build hodl cults by looking fallible -- but I still think it'd be wise to add a few more words to our vocabularies.

Bitcoin's [emergent political standards process](https://pdfs.semanticscholar.org/5761/af4eff318e876f2990aa53469352826214a0.pdf "The invisible politics of Bitcoin: governance crisis of a decentralised infrastructure") makes an interesting case study. Protocol changes are led by a core team then put to a vote by the miners, effectively forming a legislative body. This mechanism of voting, the miner "signal," was not originally intended to act as *the vote*, but has developed into that practice ([source](https://medium.com/@elombrozo/forks-signaling-and-activation-d60b6abda49a "Forks, Signaling, and Activation")). The fact that voting-power in this legislature is purchased and that nearly half of the votes are controlled by four entities ([source](https://www.technologyreview.com/s/610018/bitcoin-and-ethereum-have-a-hidden-power-structure-and-its-just-been-revealed/ "Bitcoin and Ethereum have a hidden power structure, and it’s just been revealed")) should be cause for a little concern given the stated goals. Practically speaking, the legislative design of Bitcoin is plutocratic (rule by the wealthiest participants) as mining power is a reflection of invested capital. Some people may favor this design because they feel the miners have the most investment in the protocol’s future. Others may feel the plutocracy is itself a centralization which fails to represent the majority of transactors. Either way, this is the political facet which we need to acknowledge.

Of course, even I'm simplifying the narrative of Bitcoin here. While it's accurate to say miner signals act as a legislative vote, there is a complex interplay between "core devs," non-core wallet devs, the various exchanges, the users themselves, and so on. The system is emergent and still relies on many implicit social relationships. This isn't necessarily bad; front-loading bureaucracy is a sure-fire way to kill a community. But we should understand what's happening if we're going to work in this space. The most critical issue is not perfect design but a good understanding among the players.

Another example: Ethereum hacked off many of its community members when its leaders reverted the state of the ledger to counteract the [DAO hack](https://en.wikipedia.org/wiki/Decentralized_autonomous_organization). Were they wrong to have done so? This question challenges the popular understanding of the technology. If the goal is to have zero authority in the network, then yes they were wrong, as the rollback was a clear use of authority which existed outside of the protocol code. However if the goal is to have *constrained* authority which relies on a high degree of political consensus to make changes to the ledger, then what they did was responsible governance.

These blockchain controversies suggest that people have an incomplete view of governance and authority. Because no protocol is ever "done," decisions must be made by the community on how it grows. Ethereum's rollback might be written off as a rare occassion, but it's impossible to guarantee that rollbacks will never reach political consensus again. The mental model for Ethereum must be modified if just to account for the *possibility* of such rollbacks.

Is it accurate (or even feasible) to view decentralization as the elimination of authority? If so, then Bitcoin and Ethereum have failed. If, however, decentralization can only seek to maximize the distribution of authority, then we should be looking for a more sophisticated concept of governance which categorizes matters such as protocol development, "legislative processes," and the nature of rollbacks in effective governance.

## About authority

Every computing network has an authority structure which unfolds from the assignment of capabilities and from the management of shared state. Devices must be given addresses; data must have references; permissions must be assigned; content must be shared and mutated. Therefore, the network must assign authority over information. That authority may be given to individual participants, or to subsets of the network, or to the network as a whole. However, the existence of that authority can not be avoided.

Centralized applications emerge in the "Thin Client / Thick Server" model of networking. The users in thick-server applications route their actions through the server. When they message each other, they are updating entries in the server's database. When they publish files, they are writing those files to the server's disks. The server has ultimate authority over those systems. Users can access the interfaces provided by the server to control them, but the server may override a user's choice at any time. All authority is borrowed from the server, and so the users possess no authority of their own.

The solution to this is to leverage distributed networking models which shares authority across the network. Rather than placing all capabilities and rights in a host server, we share those capabilities across many devices. There are many new mechanisms which can offset the server-based authority models. Cryptographic addressing, as in p2p filesharing networks, disconnects authority from individual devices and operators and (I would argue) establishes a form of property rights. Blockchains constrain operators to follow the agreed-upon published code (the "network constitution"). Webs of Trust enable users to assign their own authorities, build reputations, and share their knowledge socially.

## Architectural Rights

When we examine a large-scale social computing network, we need to discover how power is assigned within the network. Who is given authority to do what, and under which circumstances? This kind of information will help us understand the dynamics of the network. As authority may be used for personal, political, and commercial advantage, we need to think carefully about its assignment.

A right will dictate what a user is able to do. It will vary for different roles and configurations. We consider it a "right" because it is embedded into the protocols, and is therefore difficult to modify or take away. We call it an "architectural" right because it emerges from the design of the network. By viewing the architectural rights in aggregate, we can get a clear sense of how a network operates.

Architectural rights emerge naturally. They do not need to be formally designed to exist in a network. However, this is a cause to consider them explicitly, not an excuse to ignore them. If rights are not made explicit, they will emerge by accident, and may be assigned unfairly.

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

## Cryptographic property rights

The Web 2.0 uses hosts to identify data: the URL for any page or asset is tied to the IP address of its host. This created a strong binding between the Web's content and its hosting infrastructure.

In peer-to-peer (p2p) file networks, data is addressed using cryptographic URLs. Users look up hosts at the time of access using these cryptographic URLs. This enables content to move between hosts without changing identity; the host is not attached to the URL.

This "un-binding" of hosting from URLs has large implications for publishing data. While users have a hard time running Web hosts, they have no trouble generating cryptographic URLs. Users can author content on their machines, allocate the cryptographic URLs, and then transfer hosting-duties to more appropriate infrastructure. This provides the same level of freedom that self-hosting has, but without the costs of administration.

How does this idea relate to "property rights?"

In computing networks, we rely on cryptography to establish global truths. A cryptographic *hash,* for instance, produces an ID which uniquely identifies a file. Meanwhile, a cryptographic *keypair* produces an ID & signed dataset which can only be manipulated by the users which possess its secret key. Therefore, keypairs establish possession.

In the Web 2.0, we use keypairs and certificates to establish possession of host URLs. This makes the host URL the property of the server which has the secret key. All resources which may be found at the host URL is under the authority of that possessor. For instance, twitter.com/bob is under the authority of the server that owns twitter.com.

The Web 2.0 has no mechanism to establish possession of data independently of a host; it can only treat hostnames as a possession. As a result, users have no way to assert data-ownership. Instead, they borrow URLs from hosts, and rely on the hosts to maintain their claim of ownership. This leaves users extremely dependent on their hosts in order to participate on the Web.

Peer-to-peer networking solves this by creating cryptographic URLs using keypairs. As a result, users are able to lay direct claim to their data. Users share their keypair IDs to publish the data, and then manipulate their dataset by signing it with the secret key.

"Property" conveys specific meanings: it's difficult to take away, and difficult to modify without the consent of the owner. In the Web 2.0, these meanings are upheld by the protest of users but can be revoked by a host. With cryptographic property rights, these meanings are inalienable.

Cryptographic property forms the basis for the architectural rights to publishing, identity, permissioning, and configuration.

 - **Publishing**: Any user can publish a dataset by allocating a cryptographic URL and sharing it.
 - **Identity**: A cryptographic URL is not attached to any service, and so users' identities are sovereign.
 - **Permissioning**: Peer-to-peer networks can support user-to-user transfer, access controls, and end-to-end encryption, therefore enabling users to exclude third-party services from the content.
 - **Configuration**: As control of the signing keys and data live on the user devices, users can freely move their data between applications.

Property rights also have important effects on constraining authority, for instance in the case of moderation. While a moderator is able to remove user's content from a community, they will not be able to unpublish the content from the Internet. The content will remain accessible at its independent URL. Likewise, the moderator may be able to remove a user from the community, but they can not remove the user's identity.

On the server-driven Web, moderators are able to unpublish content and user identities, leading moderative actions to be more damaging than they need to be. Moderation should protect communities without infringing on user's basic rights.

## Network constitutionalism

There are times when network authorities can't be avoided. This may be because specific constraints on the data-model must be enforced, or because users need a consistent location to find and share data. However the risk of using an authority is that they might manipulate the dataset in ways the users would not want. To offset this risk, we can use constitutional network protocols.

A constitutional networking protocol is a protocol which automatically enforces a published code. Historically that code has been called the "protocol" (as in Bitcoin) or the "smart contract" (as in Ethereum). I'm calling that code a "constitution." I call it a constitution because it provides a set of rules for the operation of an authority. By auditing the authority's ledger, users can ensure that the constitution is being followed, and can prove when deviations occur.

Constitutionalism has the effect of transfering authority from the operator to the code. The authority's dataset may only be changed according to the rules written into the constitution. By tailing the ledger and replaying the changes, users can detect when the rules have been broken (which would result in a state mismatch). As a result, the users can focus on the design of the constitutional code to guarantee the network's activity. Users are less interested in who is running the network than how it is designed.

There is some debate over whether decentralized consensus is required to gain the value of a constitution. Let's examine the pieces individually and weigh the pros and cons.

### Secure ledgers

Secure ledgers are the core of constitutional network protocols. They are logs which contain the dataset which the authority manages. They are "append-only," meaning that the authority can only add new data to the end of the log.

Secure ledgers provide auditability to the dataset. The goal is to monitor the data and ensure that the operators never lie about its state or break the rules of its constitution. Any information added to the ledger should be very difficult to change after it's published.

To accomplish this, secure ledgers use a cryptographic addressing scheme. The ledger's history is addressed using a hash-chain or merkle tree. As a result, the "value" of the history can be reduced to small hashes. By comparing history-hashes, users can ensure that they possess equivalent histories. If history-hashes are not equivalent when they should be, they know that the history has somehow been changed, therefore the "append-only" constraint has been broken.

A secure ledger makes it easy for recipients audit the ledger. Peers can compare their history-hashes with each other to ensure that only one history has been published by the operator. If they find their hashes differ, they know the operator has tried to modify the history, and they can often prove this discrepency to the network.

### Hosted secure ledgers

A "hosted secure ledger" describes a secure ledger which is controlled by an individual operator (the host). The host publishes the code (the constitution) as well as the dataset using the p2p network.

Requests are made directly to the host. The requests, the signature of the requester, and the results of the request are logged to the secure ledger. The host handles requests by running the published constitution.

To audit the host, a user can tail the ledger and replay the requests against the constitution. If the result state ever differs from the published state, or if the ledger's history is modified, the user can prove the deviation to the network.

### Decentralized consensus

Decentralized consensus is a method for multiple parties to modify the state of a dataset without trusting each other. In theory, it allows the network to work together without concern about who the operators are. Examples include Bitcoin and Ethereum.

Decentralized consensus builds upon the value of secure ledgers. While a hosted secure ledger may reduce the trust needed in the operator, it cannot fully remove that trust. The host must be trusted not to deny transactions, and if the host misbehaves then its service will stop. Decentralized consensus makes it hard to deny a transaction because any of the active operators may accept it. It also solves the question of misbehaving hosts by providing a number of other active operators who will continue to behave well. Therefore, decentralized consensus provides the strongest possible "constitutional" guarantee.

At time of writing, decentralized consensus has been held back by issues of performance and energy efficiency. If these problems can be solved, it may provide an ideal solution for operating global authorities on the Internet, as it will provide strong auditability and strict constitutional limitations on the authority.
