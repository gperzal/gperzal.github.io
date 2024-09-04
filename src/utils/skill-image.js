// Importamos todas las imágenes como un mapa de objetos
import * as adobeXd from '/public/svg/skills/adobe-xd.svg';
import adobeaudition from '/public/svg/skills/adobeaudition.svg';
import afterEffects from '/public/svg/skills/after-effects.svg';
import blender from '/public/svg/skills/blender.svg';
import capacitorjs from '/public/svg/skills/capacitorjs.svg';
import coffeescript from '/public/svg/skills/coffeescript.svg';
import cplusplus from '/public/svg/skills/cplusplus.svg';
import gcp from '/public/svg/skills/gcp.svg';
import gimp from '/public/svg/skills/gimp.svg';
import haxe from '/public/svg/skills/haxe.svg';
import illustrator from '/public/svg/skills/illustrator.svg';
import julia from '/public/svg/skills/julia.svg';
import nginx from '/public/svg/skills/nginx.svg';
import photoshop from '/public/svg/skills/photoshop.svg';
import picsart from '/public/svg/skills/picsart.svg';
import premierepro from '/public/svg/skills/premierepro.svg';
import sketch from '/public/svg/skills/sketch.svg';
import strapi from '/public/svg/skills/strapi.svg';
import svelte from '/public/svg/skills/svelte.svg';
import vue from '/public/svg/skills/vue.svg';
import vuetifyjs from '/public/svg/skills/vuetifyjs.svg';
import webix from '/public/svg/skills/webix.svg';
import wolframalpha from '/public/svg/skills/wolframalpha.svg';
import lightroom from '/public/svg/skills/lightroom.svg';
import angular from '/public/svg/skills/angular.svg';
import aws from '/public/svg/skills/aws.svg';
import azure from '/public/svg/skills/azure.svg';
import bootstrap from '/public/svg/skills/bootstrap.svg';
import bulma from '/public/svg/skills/bulma.svg';
import c from '/public/svg/skills/c.svg';
import canva from '/public/svg/skills/canva.svg';
import csharp from '/public/svg/skills/csharp.svg';
import css from '/public/svg/skills/css.svg';
import dart from '/public/svg/skills/dart.svg';
import deno from '/public/svg/skills/deno.svg';
import django from '/public/svg/skills/django.svg';
import docker from '/public/svg/skills/docker.svg';
import fastify from '/public/svg/skills/fastify.svg';
import figma from '/public/svg/skills/figma.svg';
import firebase from '/public/svg/skills/firebase.svg';
import flutter from '/public/svg/skills/flutter.svg';
import git from '/public/svg/skills/git.svg';
import go from '/public/svg/skills/go.svg';
import graphql from '/public/svg/skills/graphql.svg';
import html from '/public/svg/skills/html.svg';
import ionic from '/public/svg/skills/ionic.svg';
import java from '/public/svg/skills/java.svg';
import javascript from '/public/svg/skills/javascript.svg';
import kotlin from '/public/svg/skills/kotlin.svg';
import markdown from '/public/svg/skills/markdown.svg';
import materialui from '/public/svg/skills/materialui.svg';
import matlab from '/public/svg/skills/matlab.svg';
import memsql from '/public/svg/skills/memsql.svg';
import microsoftoffice from '/public/svg/skills/microsoftoffice.svg';
import mongoDB from '/public/svg/skills/mongoDB.svg';
import mysql from '/public/svg/skills/mysql.svg';
import nextJS from '/public/svg/skills/nextJS.svg';
import numpy from '/public/svg/skills/numpy.svg';
import nuxtJS from '/public/svg/skills/nuxtJS.svg';
import opencv from '/public/svg/skills/opencv.svg';
import php from '/public/svg/skills/php.svg';
import postgresql from '/public/svg/skills/postgresql.svg';
import python from '/public/svg/skills/python.svg';
import pytorch from '/public/svg/skills/pytorch.svg';
import react from '/public/svg/skills/react.svg';
import ruby from '/public/svg/skills/ruby.svg';
import selenium from '/public/svg/skills/selenium.svg';
import swift from '/public/svg/skills/swift.svg';
import tailwind from '/public/svg/skills/tailwind.svg';
import tensorflow from '/public/svg/skills/tensorflow.svg';
import typescript from '/public/svg/skills/typescript.svg';
import unity from '/public/svg/skills/unity.svg';
import vitejs from '/public/svg/skills/vitejs.svg';
import wordpress from '/public/svg/skills/wordpress.svg';
import oracle from '/public/svg/skills/oracle.svg';
import shadcnui from '/public/svg/skills/shadcnui.svg';
import chakraui from '/public/svg/skills/chakraui.svg';

// Mapa de habilidades a sus imágenes correspondientes
const skillImageMap = {
  'gcp': gcp,
  'html': html,
  'photoshop': photoshop,
  'docker': docker,
  'illustrator': illustrator,
  'adobe xd': adobeXd,
  'after effects': afterEffects,
  'css': css,
  'angular': angular,
  'javascript': javascript,
  'next.js': nextJS,
  'nuxt js': nuxtJS,
  'react': react,
  'svelte': svelte,
  'typescript': typescript,
  'vue': vue,
  'bootstrap': bootstrap,
  'bulma': bulma,
  'capacitorjs': capacitorjs,
  'coffeescript': coffeescript,
  'memsql': memsql,
  'mongodb': mongoDB,
  'mysql': mysql,
  'postgresql': postgresql,
  'tailwind': tailwind,
  'vitejs': vitejs,
  'vuetifyjs': vuetifyjs,
  'c': c,
  'c++': cplusplus,
  'c#': csharp,
  'dart': dart,
  'go': go,
  'java': java,
  'kotlin': kotlin,
  'julia': julia,
  'matlab': matlab,
  'php': php,
  'python': python,
  'ruby': ruby,
  'swift': swift,
  'adobe audition': adobeaudition,
  'aws': aws,
  'deno': deno,
  'django': django,
  'firebase': firebase,
  'gimp': gimp,
  'git': git,
  'graphql': graphql,
  'lightroom': lightroom,
  'materialui': materialui,
  'nginx': nginx,
  'numpy': numpy,
  'opencv': opencv,
  'premiere pro': premierepro,
  'pytorch': pytorch,
  'selenium': selenium,
  'strapi': strapi,
  'tensorflow': tensorflow,
  'webix': webix,
  'wordpress': wordpress,
  'azure': azure,
  'blender': blender,
  'fastify': fastify,
  'figma': figma,
  'flutter': flutter,
  'haxe': haxe,
  'ionic': ionic,
  'markdown': markdown,
  'ms office': microsoftoffice,
  'picsart': picsart,
  'sketch': sketch,
  'unity': unity,
  'wolframalpha': wolframalpha,
  'canva': canva,
  'oracle': oracle,
  'shadcnui': shadcnui,
  'chakraui': chakraui,
};

export const skillsImage = (skill) => {
  return skillImageMap[skill.toLowerCase()] || null;
};