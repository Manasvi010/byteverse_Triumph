# BYTEVERSE_TRIUMPH
# Thesis
Dynamic pricing of e-shop products through machine learning algorithms

# Abstract
Dynamic pricing is a business strategy that periodically adjusts the prices of products or services offered by a company and aims to maximize its long-term profits. It works best in an environment where prices can be adjusted easily and frequently, such as e-commerce. The problem of dynamic pricing is not only about price optimization but also about better knowledge of the relationship between price and market response. This relationship is usually modeled through a demand function, which is based on several unknown factors, the values of which can be found by applying statistical estimation techniques to sales history data. This diploma thesis addresses the problem of dynamic pricing through machine learning. The essential value of machine learning algorithms is that they can generalize through experience. They can then accurately perform new and unknown prediction tasks after experiencing a set of learning data, such as historical sales data. Therefore, the use of machine learning techniques and algorithms is appropriate to address the problem of dynamic pricing.

This diploma thesis proposes a system for the dynamic pricing of products , through machine learning models. In this approach, real data are used and the evaluation of the proposed system is done in real time. The main purpose is to develop and present a methodology for solving the problem of dynamic pricing under realistic conditions.


# Description
This project was implemented using real data from an e-commerce store. All the necessary data were saved to a database in which our program had access using mysql-connector. The credentials to connect to the database differ and general names are being used in order to protect the data. All the data had been processed in order to be functional and in the appropriate format.

# Neural_network
A neural network is used in order to model the demand function of the products for each week. The neural network can be used after the training in order to predict the demand of each product for a week. The prices of the products are modified dynamically in order to maximize the gains for the week of the prediction. The optimization algorithm used for the maximization is particle swarm optimization.

# Dependencies
Install TensorFlow
Download and install Anaconda or the smaller Miniconda
On Windows open the Start menu and open an Anaconda Command Prompt.


pip install pandas
pip install python
pip install numpy
pip install flask
pip install sklearn
