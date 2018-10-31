# Deliverable 5

The aim for this part of the project was to develop a pipeline for measuring and understanding the data flows from smart home Internet-of-Things devices. We purchased a variety of devices and experimented with different ways of uncovering the entities they communicate with - including the manufacturer but also other third parties - and the kinds of data they might send.

While methods exist for intercepting and decrypting network traffic from web browsers and smartphone apps, this proved challenging for IoT devices, because it is not possible to install poisoned certificates needed to decrypt data packets in transit. However, what we can see is the destination, timing and other features of the traffic. Using this, we attempted to reverse engineer the content of the traffic based on its _shape_. A researcher repeatedly interacted with the devices, and tagged the ensuing bursts of traffic. This allowed us to create a highly accurate probabilistic model associating different traffic patterns with certain functionality.

The models of data flows from the devices we studied can be seen as a table or as raw json:

[Destinations by Devices - Static Tabular View](http://htmlpreview.github.io/?https://raw.githubusercontent.com/OxfordHCC/ReTiPS/master/D5/destination-by-device.html)

[Destinations by Devices - JSON Collated](https://raw.githubusercontent.com/OxfordHCC/ReTiPS/master/D5/destination-by-device.json)
