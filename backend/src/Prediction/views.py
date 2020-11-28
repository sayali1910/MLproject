from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from Prediction.apps import PredictionConfig
from Prediction.apps import JobPredictionConfig
import pandas as pd

# Create your views here.
# Class based view to predict based on IRIS model


class Personality_Model_Predict(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        data = request.data
        keys = []
        values = []
        for key in data:
            keys.append(key)
            values.append(data[key])
        X = pd.Series(values).to_numpy().reshape(1, -1)
        loaded_mlmodel = PredictionConfig.classifier
        y_pred = loaded_mlmodel.predict(X)
        y_pred = pd.Series(y_pred)
        print(y_pred)
        desc = {'ISTJ ': "ISTJs are responsible organizers, driven to create and enforce order within systems and institutions. They are neat and orderly, inside and out, and tend to have a procedure for everything they do.",
                'ISFJ ': "ISFJs are industrious caretakers, loyal to traditions and organizations. They are practical, compassionate, and caring, and are motivated to provide for others and protect them from the perils of life.",
                'INFJ ': "INFJs are creative nurturers with a strong sense of personal integrity and a drive to help others realize their potential. Creative and dedicated, they have a talent for helping others with original solutions to their personal challenges.",
                'INTJ ': "INTJs are analytical problem-solvers, eager to improve systems and processes with their innovative ideas. They have a talent for seeing possibilities for improvement, whether at work, at home, or in themselves.",
                'ISTP ': "ISTPs are observant artisans with an understanding of mechanics and an interest in troubleshooting. They approach their environments with a flexible logic, looking for practical solutions to the problems at hand.",
                'ISFP ': "ISFPs are gentle caretakers who live in the present moment and enjoy their surroundings with cheerful, low-key enthusiasm. They are flexible and spontaneous, and like to go with the flow to enjoy what life has to offer.",
                'INFP ': "INFPs are imaginative idealists, guided by their own core values and beliefs. To a Healer, possibilities are paramount; the reality of the moment is only of passing concern. They see potential for a better future, and pursue truth and meaning with their own flair.",
                'INTP ': "INTPs are philosophical innovators, fascinated by logical analysis, systems, and design. They are preoccupied with theory, and search for the universal law behind everything they see. They want to understand the unifying themes of life, in all their complexity.",
                'ESTP ': "ESTPs are energetic thrillseekers who are at their best when putting out fires, whether literal or metaphorical. They bring a sense of dynamic energy to their interactions with others and the world around them.",
                'ESFP ': "ESFPs are vivacious entertainers who charm and engage those around them. They are spontaneous, energetic, and fun-loving, and take pleasure in the things around them: food, clothes, nature, animals, and especially people.",
                'ENFP ': "ENFPs are people-centered creators with a focus on possibilities and a contagious enthusiasm for new ideas, people and activities. Energetic, warm, and passionate, ENFPs love to help other people explore their creative potential.",
                'ENTP ': "ENTPs are inspired innovators, motivated to find new solutions to intellectually challenging problems. They are curious and clever, and seek to comprehend the people, systems, and principles that surround them.",
                'ESTJ ': "ESTJs are hardworking traditionalists, eager to take charge in organizing projects and people. Orderly, rule-abiding, and conscientious, ESTJs like to get things done, and tend to go about projects in a systematic, methodical way.",
                'ESFJ ': "ESFJs are conscientious helpers, sensitive to the needs of others and energetically dedicated to their responsibilities. They are highly attuned to their emotional environment and attentive to both the feelings of others and the perception others have of them.",
                'ENFJ ': "ENFJs are idealist organizers, driven to implement their vision of what is best for humanity. They often act as catalysts for human growth because of their ability to see potential in other people and their charisma in persuading others to their ideas.",
                'ENTJ ': "ENTJs are strategic leaders, motivated to organize change. They are quick to see inefficiency and conceptualize new solutions, and enjoy developing long-range plans to accomplish their vision. They excel at logical reasoning and are usually articulate and quick-witted."}

        response_dict = {
            "Prediced personality": y_pred[0], "Description": desc[y_pred[0]]}
        return Response(response_dict, status=200)


class Job_Model_Predict(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        data = request.data
        keys = []
        values = []
        for key in data:
            keys.append(key)
            values.append(data[key])
        person = {'ISTJ ': 1, 'ISFJ ': 2, 'INFJ ': 3, 'INTJ ': 4, 'ISTP ': 5, 'ISFP ': 6, 'INFP ': 7, 'INTP ': 8,
                  'ESTP ': 9, 'ESFP ': 10, 'ENFP ': 11, 'ENTP ': 12, 'ESTJ ': 13, 'ESFJ ': 14, 'ENFJ ': 15, 'ENTJ ': 16}

        key1 = values[1]
        value1 = person[key1]
        print(value1)
        values[1] = value1
        X = pd.Series(values).to_numpy().reshape(1, -1)
        loaded_mlmodel = JobPredictionConfig.classifier
        y_pred = loaded_mlmodel.predict(X)
        y_pred = pd.Series(y_pred)
        print(y_pred)

        response_dict = {"Predicted job": y_pred[0]}
        return Response(response_dict, status=200)
