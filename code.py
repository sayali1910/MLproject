import pandas as pd
from sklearn import linear_model
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import confusion_matrix
from sklearn.metrics import accuracy_score
from sklearn.metrics import precision_score
from sklearn.metrics import recall_score

data =pd.read_csv('Train16.csv')
array = data.values
df=pd.DataFrame(array)

maindf =df[[0,1,2,3,4,5,6,7]]
mainarray=maindf.values

temp=df[8]
train_y =temp.values
train_y=temp.values

for i in range(len(train_y)):
    
	train_y[i] =str(train_y[i])


X_train, X_test, y_train, y_test = train_test_split(mainarray, train_y, test_size=0.50, random_state=1, stratify=train_y)

#Logistic Regression
mul_lr = linear_model.LogisticRegression(multi_class='multinomial', solver='newton-cg',max_iter =1000)
mul_lr.fit(mainarray, train_y)

pred=mul_lr.predict(X_test)

print("Confusion Matrix for Logistic Regression:")
mat=confusion_matrix(y_test, pred)
print(mat)

print("Accuracy:")
print(accuracy_score(y_test, pred))

print("Precision:")
print(precision_score(y_test, pred,average='macro'))

print("Recall:")
print(recall_score(y_test, pred,average='macro'))
  
    
#KNN
neigh = KNeighborsClassifier(n_neighbors=3)
neigh.fit(mainarray, train_y)

pred1=neigh.predict(X_test)

print("\nConfusion Matrix for KNN:")
mat=confusion_matrix(y_test, pred1)
print(mat)

print("Accuracy:")
print(accuracy_score(y_test, pred1))

print("Precision:")
print(precision_score(y_test, pred1,average='macro'))

print("Recall:")
print(recall_score(y_test, pred1,average='macro'))

from joblib import dump, load
dump(mul_lr, 'code.joblib')

loaded_classifier = load('code.joblib')
loaded_classifier.score(X_test,y_test)
